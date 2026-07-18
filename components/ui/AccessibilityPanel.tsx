"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Contrast,
  RotateCcw,
  Type,
  Underline,
  X,
} from "lucide-react";

type Preferences = {
  largeText: boolean;
  highContrast: boolean;
  underlinedLinks: boolean;
  reducedMotion: boolean;
};

const defaultPreferences: Preferences = {
  largeText: false,
  highContrast: false,
  underlinedLinks: false,
  reducedMotion: false,
};

const storageKey = "reserva-accessibility";

function getInitialPreferences(): Preferences {
  if (typeof window === "undefined") {
    return defaultPreferences;
  }

  try {
    const stored = window.localStorage.getItem(storageKey);

    if (!stored) {
      return defaultPreferences;
    }

    const parsed = JSON.parse(stored) as Partial<Preferences>;

    return {
      largeText: parsed.largeText === true,
      highContrast: parsed.highContrast === true,
      underlinedLinks: parsed.underlinedLinks === true,
      reducedMotion: parsed.reducedMotion === true,
    };
  } catch {
    return defaultPreferences;
  }
}

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<Preferences>(getInitialPreferences);

  const panelRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.a11yTextSize = preferences.largeText
      ? "large"
      : "default";

    root.dataset.a11yContrast = preferences.highContrast
      ? "high"
      : "default";

    root.dataset.a11yUnderlines = preferences.underlinedLinks
      ? "true"
      : "false";

    root.dataset.a11yMotion = preferences.reducedMotion
      ? "reduce"
      : "default";

    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(preferences)
      );
    } catch {
      // .
    }

    return () => {
      delete root.dataset.a11yTextSize;
      delete root.dataset.a11yContrast;
      delete root.dataset.a11yUnderlines;
      delete root.dataset.a11yMotion;
    };
  }, [preferences]);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#accesibilidad") {
        setIsOpen(true);
      }
    };

    openFromHash();

    window.addEventListener("hashchange", openFromHash);

    return () => {
      window.removeEventListener(
        "hashchange",
        openFromHash
      );
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);

        window.requestAnimationFrame(() => {
          triggerRef.current?.focus();
        });
      }
    };

    const keepFocusInPanel = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusable =
        panelRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]"
        );

      if (!focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("keydown", keepFocusInPanel);

    return () => {
      window.removeEventListener(
        "keydown",
        closeOnEscape
      );

      window.removeEventListener(
        "keydown",
        keepFocusInPanel
      );
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      panelRef.current?.focus();
    }
  }, [isOpen]);

  const togglePreference = (
    preference: keyof Preferences
  ) => {
    setPreferences((current) => ({
      ...current,
      [preference]: !current[preference],
    }));
  };

  const closePanel = () => {
    setIsOpen(false);

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  return (
    <div
      id="accesibilidad"
      className="fixed bottom-5 left-5 z-40 sm:bottom-7 sm:left-7"
    >
      {isOpen ? (
        <section
          id="accessibility-dialog"
          ref={panelRef}
          role="dialog"
          tabIndex={-1}
          aria-label="Preferencias de accesibilidad"
          className="absolute bottom-16 left-0 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-stone-200 bg-[#fbfaf7] p-4 text-stone-900 shadow-[0_24px_70px_rgba(43,33,25,0.22)] sm:bottom-[4.5rem] sm:p-5"
        >
          <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.21em] text-[#6f5847]">
                Reserva para todos
              </p>

              <h2 className="mt-1 text-xl tracking-[-0.035em] [font-family:var(--font-heading)]">
                Accesibilidad
              </h2>
            </div>

            <button
              type="button"
              onClick={closePanel}
              className="inline-flex size-8 items-center justify-center rounded-full transition hover:bg-stone-900/5"
              aria-label="Cerrar preferencias de accesibilidad"
            >
              <X
                className="size-4"
                aria-hidden="true"
              />
            </button>
          </div>

          <p className="py-4 text-xs leading-5 text-stone-600">
            Ajusta la lectura y el movimiento de esta
            experiencia. Guardaremos tu preferencia en este
            dispositivo.
          </p>

          <div className="grid gap-2">
            <PreferenceButton
              active={preferences.largeText}
              icon={<Type className="size-4" />}
              label="Texto ampliado"
              onClick={() =>
                togglePreference("largeText")
              }
            />

            <PreferenceButton
              active={preferences.highContrast}
              icon={<Contrast className="size-4" />}
              label="Contraste elevado"
              onClick={() =>
                togglePreference("highContrast")
              }
            />

            <PreferenceButton
              active={preferences.underlinedLinks}
              icon={<Underline className="size-4" />}
              label="Subrayar enlaces"
              onClick={() =>
                togglePreference("underlinedLinks")
              }
            />

            <PreferenceButton
              active={preferences.reducedMotion}
              icon={
                <Accessibility className="size-4" />
              }
              label="Reducir movimiento"
              onClick={() =>
                togglePreference("reducedMotion")
              }
            />
          </div>

          <button
            type="button"
            onClick={() =>
              setPreferences(defaultPreferences)
            }
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-stone-600 transition hover:text-stone-950"
          >
            <RotateCcw
              className="size-3.5"
              aria-hidden="true"
            />
            Restablecer ajustes
          </button>
        </section>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-12 items-center justify-center rounded-full border-2 border-[#f8f4ed] bg-[#171310] text-white shadow-[0_8px_28px_rgba(23,19,16,0.32)] transition hover:scale-105 focus-visible:outline-[#d6ad8a]"
        aria-expanded={isOpen}
        aria-controls="accessibility-dialog"
        aria-label="Abrir preferencias de accesibilidad"
      >
        <Accessibility
          className="size-5"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

type PreferenceButtonProps = {
  active: boolean;
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

function PreferenceButton({
  active,
  icon,
  label,
  onClick,
}: PreferenceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-3 text-left text-sm transition ${
        active
          ? "border-[#8d6044] bg-[#f0e1d4] text-stone-950"
          : "border-stone-200 bg-white text-stone-700 hover:border-stone-300"
      }`}
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>

      <span
        className={`size-2 rounded-full ${
          active
            ? "bg-[#8d6044]"
            : "bg-stone-300"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}