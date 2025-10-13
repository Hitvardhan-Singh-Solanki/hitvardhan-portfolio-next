import { Heading } from "@/components/heading/heading";
import "./contact.scss";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  const contactMethods: Array<{
    href: string;
    icon: any;
    label: string;
    value: string;
    external: boolean;
    download?: boolean;
  }> = [
    {
      href: "mailto:hitvardhan19@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      value: "hitvardhan19@gmail.com",
      external: false,
    },
    {
      href: "https://www.linkedin.com/in/hitvardhan/",
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "/in/hitvardhan",
      external: true,
    },
    {
      href: "https://www.github.com/hitvardhan-singh-solanki",
      icon: FaGithub,
      label: "GitHub",
      value: "@hitvardhan-singh-solanki",
      external: true,
    },
    {
      href: "/docs/pdf/resume.pdf",
      icon: FaDownload,
      label: "Resume",
      value: "Download PDF",
      external: false,
      download: true,
    },
  ];

  return (
    <div className="contact-page">
      <div className="container mx-auto px-4 py-20 min-h-screen">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="contact-header-content">
            <Heading>Let&apos;s Connect</Heading>
            <p className="contact-subtitle">
              I&apos;m currently looking for full-time opportunities in web
              development. Feel free to reach out through any of the channels
              below.
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                download={
                  method.download
                    ? "Hitvardhan_Singh_Solanki_Resume.pdf"
                    : undefined
                }
                className="contact-card group"
              >
                <div className="contact-card-inner">
                  <div className="contact-icon-wrapper">
                    <Icon className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-label">{method.label}</h3>
                    <p className="contact-value" data-tooltip={method.value}>
                      {method.value}
                    </p>
                  </div>
                  <div className="contact-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="contact-footer-section">
          <div className="contact-availability">
            <div className="availability-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for opportunities</span>
            </div>
            <p className="availability-description">
              Open to remote positions and willing to relocate for the right
              opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
