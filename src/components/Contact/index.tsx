"use client";

import { useState } from "react";
import Toast from "../Common/Toast";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (remplacer par votre logique d'envoi)
    setTimeout(() => {
      setToastMessage("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
      setToastType("success");
      setShowToast(true);
      setIsSubmitting(false);
      
      // Réinitialiser le formulaire
      const form = e.currentTarget;
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Section Informations Personnelles */}
          <div className="w-full px-4 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 rounded-xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-0 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Informations de Contact
              </h2>
              <p className="mb-8 text-base font-medium text-body-color">
                N&apos;hésitez pas à nous contacter pour toute question ou demande d&apos;information.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@cxsystems.com"
                      className="text-base text-body-color hover:text-primary"
                    >
                      contact@cxsystems.com
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H6.05001C6.56271 2.5 7.01028 2.85782 7.13151 3.35782L7.97085 6.66667C8.08085 7.12067 7.87085 7.59067 7.46085 7.82067L6.04167 8.66667C7.16271 11.1627 8.83729 12.8373 11.3333 13.9583L12.1792 12.5392C12.4092 12.1292 12.8792 11.9192 13.3333 12.0292L16.6421 12.8685C17.1421 12.9897 17.5 13.4373 17.5 13.95V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H14.1667C7.41286 17.5 2.5 12.5871 2.5 5.83333V4.16667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Téléphone
                    </h4>
                    <a
                      href="tel:+33123456789"
                      className="text-base text-body-color hover:text-primary"
                    >
                      +212 699254247
                    </a>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43655 4.64575 3.08099C6.00131 1.72542 7.90898 0.935242 9.89815 0.935242C11.8873 0.935242 13.795 1.72542 15.1506 3.08099C16.5061 4.43655 17.2963 6.34421 17.2963 8.33333H17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Adresse
                    </h4>
                    <p className="text-base text-body-color">
                     
                      75001 Casablanca, Maroc
                    </p>
                  </div>
                </div>

                {/* Réseaux Sociaux */}
                <div className="pt-4">
                  <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Suivez-nous
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition hover:bg-primary hover:text-white"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M15.63 0H2.37C1.06 0 0 1.06 0 2.37v13.26C0 16.94 1.06 18 2.37 18h13.26c1.31 0 2.37-1.06 2.37-2.37V2.37C18 1.06 16.94 0 15.63 0zM5.53 15.3H2.7V6.72h2.83v8.58zM4.11 5.6c-.91 0-1.65-.74-1.65-1.65 0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65 0 .91-.74 1.65-1.65 1.65zm11.19 9.7h-2.83v-4.15c0-.55 0-1.24-.75-1.24-.76 0-.87.59-.87 1.2v4.19H8.32V6.72h2.71v1.13h.04c.35-.66 1.2-1.35 2.47-1.35 2.64 0 3.13 1.74 3.13 4.01v4.79z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition hover:bg-primary hover:text-white"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M9 0C6.83 0 6.53.01 5.88.05 5.23.09 4.77.22 4.38.41c-.41.19-.76.44-1.11.79-.35.35-.6.7-.79 1.11-.19.39-.32.85-.36 1.5-.04.65-.05.95-.05 2.12 0 1.17.01 1.47.05 2.12.04.65.17 1.11.36 1.5.19.41.44.76.79 1.11.35.35.7.6 1.11.79.39.19.85.32 1.5.36.65.04.95.05 2.12.05 1.17 0 1.47-.01 2.12-.05.65-.04 1.11-.17 1.5-.36.41-.19.76-.44 1.11-.79.35-.35.6-.7.79-1.11.19-.39.32-.85.36-1.5.04-.65.05-.95.05-2.12 0-1.17-.01-1.47-.05-2.12-.04-.65-.17-1.11-.36-1.5-.19-.41-.44-.76-.79-1.11-.35-.35-.7-.6-1.11-.79-.39-.19-.85-.32-1.5-.36C10.47.01 10.17 0 9 0zm0 1.62c1.15 0 1.43.01 1.94.05.47.02.72.1.89.16.23.06.39.13.54.22.15.1.27.21.4.34.13.13.24.25.34.4.09.15.16.31.22.54.06.17.14.42.16.89.04.51.05.79.05 1.94s-.01 1.43-.05 1.94c-.02.47-.1.72-.16.89-.06.23-.13.39-.22.54-.1.15-.21.27-.34.4-.13.13-.25.24-.4.34-.15.09-.31.16-.54.22-.17.06-.42.14-.89.16-.51.04-.79.05-1.94.05s-1.43-.01-1.94-.05c-.47-.02-.72-.1-.89-.16-.23-.06-.39-.13-.54-.22-.15-.1-.27-.21-.4-.34-.13-.13-.24-.25-.34-.4-.09-.15-.16-.31-.22-.54-.06-.17-.14-.42-.16-.89-.04-.51-.05-.79-.05-1.94s.01-1.43.05-1.94c.02-.47.1-.72.16-.89.06-.23.13-.39.22-.54.1-.15.21-.27.34-.4.13-.13.25-.24.4-.34.15-.09.31-.16.54-.22.17-.06.42-.14.89-.16.51-.04.79-.05 1.94-.05zM9 4.5A4.5 4.5 0 1 0 13.5 9 4.5 4.5 0 0 0 9 4.5zm0 7.43A2.93 2.93 0 1 1 11.93 9 2.93 2.93 0 0 1 9 11.93zM14.83 3.15a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition hover:bg-primary hover:text-white"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M15.63 3.43c.01.15.01.3.01.45 0 4.56-3.47 9.82-9.82 9.82-1.95 0-3.76-.57-5.29-1.55.27.03.54.04.82.04 1.61 0 3.09-.55 4.27-1.47-1.51-.03-2.78-1.02-3.22-2.39.21.04.43.06.65.06.31 0 .62-.04.91-.12-1.58-.32-2.77-1.71-2.77-3.38v-.04c.46.26 1 .41 1.57.43-.93-.62-1.54-1.68-1.54-2.88 0-.63.17-1.23.47-1.75 1.71 2.1 4.27 3.48 7.15 3.62-.06-.26-.09-.54-.09-.82 0-1.99 1.61-3.6 3.6-3.6 1.04 0 1.98.44 2.64 1.14.82-.16 1.6-.46 2.3-.88-.27.84-.84 1.55-1.59 2 .73-.09 1.43-.28 2.08-.57-.48.72-1.09 1.35-1.8 1.85z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
            <div
              className="mb-12 rounded-xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Envoyez-nous un Message
              </h2>
              <p className="mb-12 text-center text-base font-medium text-body-color">
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        placeholder="Entrez votre nom"
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3.5 text-base text-body-color outline-hidden transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre Email
                      </label>
                      <input
                        type="email"
                        placeholder="Entrez votre email"
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3.5 text-base text-body-color outline-hidden transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Entrez votre message"
                        className="border-stroke w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3.5 text-base text-body-color outline-hidden transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary to-purple-600 px-9 py-4 text-base font-semibold text-white shadow-submit transition-all duration-300 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed dark:shadow-submit-dark shine"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
};

export default Contact;
