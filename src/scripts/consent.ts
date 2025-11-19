// Consent Management für Google Consent Mode v2

interface ConsentState {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

const CONSENT_STORAGE_KEY = 'cookie_consent';
const CONSENT_VERSION = '1.0';

// Lade gespeicherten Consent
function loadConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    // Prüfe Version - bei Änderungen Consent zurücksetzen
    if (parsed.version !== CONSENT_VERSION) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    
    return parsed.consent;
  } catch {
    return null;
  }
}

// Speichere Consent
function saveConsent(consent: ConsentState): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
      version: CONSENT_VERSION,
      consent,
      timestamp: Date.now(),
    }));
  } catch (e) {
    console.error('Failed to save consent:', e);
  }
}


// Aktualisiere Consent
export function updateConsent(analytics: boolean): void {
  const consent: ConsentState = {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: 'denied', // Wir verwenden keine Werbe-Cookies
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  };
  
  saveConsent(consent);
  
  // Aktualisiere Google Consent Mode
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', consent);
  }
}

// Akzeptiere alle Cookies
export function acceptAll(): void {
  updateConsent(true);
  hideBanner();
}

// Akzeptiere nur notwendige Cookies
export function acceptNecessary(): void {
  updateConsent(false);
  hideBanner();
}

// Zeige/Verstecke Banner
export function showBanner(): void {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.remove('hidden');
    banner.classList.add('flex');
  }
}

export function hideBanner(): void {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.classList.add('hidden');
    banner.classList.remove('flex');
  }
}

// Zeige/Verstecke Customize-Panel
export function toggleCustomize(): void {
  const panel = document.getElementById('cookie-customize');
  if (panel) {
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
      panel.classList.remove('hidden');
      panel.classList.add('block');
    } else {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    }
  }
}

// Initialisierung beim Laden
export function initConsent(): void {
  const consent = loadConsent();
  
  // Zeige Banner nur wenn noch kein Consent vorhanden
  if (!consent) {
    // Warte kurz, damit das Layout geladen ist
    setTimeout(() => {
      showBanner();
    }, 500);
  }
}

// Exportiere für globale Verwendung
if (typeof window !== 'undefined') {
  (window as any).consentManager = {
    acceptAll,
    acceptNecessary,
    toggleCustomize,
    updateConsent,
    showBanner,
  };
  
  // Initialisiere automatisch beim Laden
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
}

