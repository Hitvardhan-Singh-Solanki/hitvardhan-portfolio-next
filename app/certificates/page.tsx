"use client";

import { Heading } from "@/components/heading/heading";
import { certificates, credlyUrl, udemyUrl } from "@/data/certifications";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";
import { useStaggerAnimation } from "@/lib/hooks";
import { StatsCard } from "@/components/ui/stats-card";
import "./certificates.scss";

export default function Certificates() {
  useStaggerAnimation(".certificate", 0.25);

  return (
    <div className="certificates-page">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="certificates-hero">
          <Heading>Certifications</Heading>
          <p className="certificates-intro">
            Professional certifications and credentials demonstrating expertise
            in data visualization, blockchain technology, and business
            intelligence tools.
          </p>
        </div>

        {/* Stats */}
        <div className="certificates-stats">
          <StatsCard value="45+" label="Certifications" />
          <StatsCard value="100%" label="Verified" />
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <Link
              href={
                certificate.credly
                  ? credlyUrl + certificate.id
                  : udemyUrl + certificate.id
              }
              target="_blank"
              key={certificate.id}
              className="certificate"
            >
              <div className="certificate-header">
                <div className="certificate-icon-wrapper">
                  <Award size={20} />
                </div>
                <h2 className="certificate-title">{certificate.name}</h2>
                <ExternalLink className="certificate-external-icon" size={20} />
              </div>

              <div className="certificate-image-wrapper">
                <Image
                  src={certificate.src}
                  alt={certificate.alt}
                  width={400}
                  height={200}
                  className="certificate-image"
                />
              </div>

              <p className="certificate-description">
                {certificate.description}
              </p>

              <div className="certificate-footer">
                <span className="certificate-platform">
                  {certificate.credly ? "Credly" : "Udemy"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Link */}
        <div className="certificates-more">
          <Link
            href="https://www.linkedin.com/in/hitvardhan/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="certificates-more-link"
          >
            View more on LinkedIn
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
