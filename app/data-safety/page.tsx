import { InformationPage } from "@/components/ui/InformationPage";
import { InformationSection } from "@/components/ui/InformationSection";
import { InformationSubsection } from "@/components/ui/InformationSubsection";
import { InformationTitle } from "@/components/ui/InformationTitle";
import TextBold from "@/components/ui/TextBold";
import { LastUpdated } from "@/components/ui/lastUpdate";
import { Paragraph } from "@/components/ui/paragraph";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Data Safety",
};

const DataSafety = () => {
  return (
    <InformationPage>
      <LastUpdated date="January 1, 2026" />
      <InformationTitle>Data Safety & Privacy</InformationTitle>
      <Paragraph>
        Your privacy and security are at the heart of everything we do. We are
        committed to protecting your data, being transparent about how it is
        used, and ensuring full compliance with applicable data protection laws,
        including GDPR.
      </Paragraph>
      <InformationSection title="Transparency First" className="mt-20">
        <Paragraph>
          We believe you should always know what data is collected, why it’s
          collected, and how it’s protected. We never hide behind legal jargon
          or unclear policies.
        </Paragraph>
      </InformationSection>
      <InformationSection title="Our Privacy Commitments" className="mt-20">
        <Paragraph>
          <TextBold>AES-256 Encryption</TextBold>
          <br />
          All data is encrypted at rest using industry-standard AES-256
          encryption.
          <br />
          <TextBold>Never Sold</TextBold>
          <br />
          Your data is never sold, rented, or traded — ever.
          <br />
          <TextBold>GDPR Compliant</TextBold>
          <br />
          We fully comply with GDPR and applicable data protection regulations.
          <br />
          <TextBold>30-Day Deletion Window</TextBold>
          <br />
          Account-linked data is permanently deleted within 30 days of account
          deletion.
        </Paragraph>
      </InformationSection>
      <InformationSection title="Important Notice" className="mt-20">
        <Paragraph>
          This platform provides wellness-focused tools and insights. It does
          not provide medical advice, diagnosis, or treatment, and should not
          replace consultation with qualified healthcare professionals.
        </Paragraph>
      </InformationSection>
      <InformationSection title="Data We Collect" className="mt-20">
        <Paragraph>
          We only collect data necessary to deliver and improve our service.
        </Paragraph>
        <InformationSubsection title="Account Information">
          <Paragraph indent={"sm"}>
            • Email address
            <br />• Basic account identifiers
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Menstrual Cycle Data">
          <Paragraph indent={"sm"}>
            • Cycle logs
            <br />
            • Symptom tracking
            <br />• User-submitted wellness inputs
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Photo Data (Optional)">
          <Paragraph indent={"sm"}>
            • Images uploaded by you
            <br />
            • Symptom tracking
            <br />• User-submitted wellness inputs
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Nutrition & Lifestyle Data">
          <Paragraph indent={"sm"}>
            • Meals, habits, activity, and lifestyle inputs
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Technical Data">
          <Paragraph indent={"sm"}>
            • Device type and app version
            <br />• Performance and diagnostic data
          </Paragraph>
        </InformationSubsection>
      </InformationSection>
      <InformationSection title="Data We Do Not Collect" className="mt-20">
        <Paragraph>
          We explicitly avoid collecting highly sensitive personal data.
        </Paragraph>
        <Paragraph>
          <TextBold>Biometric Identifiers</TextBold>
          <br />
          No fingerprints, facial recognition data, or voiceprints
          <br />
          <TextBold>Medical Records</TextBold>
          <br />
          No clinical or hospital records
          <br />
          <TextBold>Financial Information</TextBold>
          <br />
          No credit card or banking details
          <br />
          <TextBold>Precise Location Data (by default)</TextBold>
          <br />
          We do not track GPS-level location unless explicitly enabled
        </Paragraph>
      </InformationSection>
      <InformationSection title="How We Use Your Data" className="mt-20">
        <Paragraph>
          <TextBold className="pl-3">• Personalised Wellness Insights</TextBold>
          <br />
          To generate tailored insights based on your inputs
          <br />
          <br />
          <TextBold className="pl-3">• Service Operation</TextBold>
          <br />
          To maintain, operate, and improve the platform
          <br />
          <br />
          <TextBold className="pl-3">• Communication</TextBold>
          <br />
          To send important updates and account-related messages
          <br />
          <br />
          <TextBold className="pl-3">• Research & Development</TextBold>
          <br />
          To improve features using aggregated, anonymised data
        </Paragraph>
      </InformationSection>
      <InformationSection title="Security Measures" className="mt-20">
        <Paragraph>We apply industry-leading security practices.</Paragraph>
        <Paragraph indent={"sm"}>
          <TextBold>• AES-256 Encryption</TextBold>
          <br />
          <TextBold>• TLS 1.3</TextBold> secure data transmission
          <br />
          <TextBold>• Secure Key Management</TextBold>
          <br />
          <TextBold>• Strict Access Controls</TextBold>
          <br />
          <TextBold>• Regular Security Audits</TextBold>
          <br />
          <TextBold>• Data Minimisation Principles</TextBold>
        </Paragraph>
      </InformationSection>
      <InformationSection title="Data Sharing" className="mt-20">
        <InformationSubsection title="We Never Sell Your Data" className="mt-8">
          <Paragraph>
            Your data is not sold or shared with advertisers, data brokers, or
            third parties for marketing purposes.
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Trusted Infrastructure Partners">
          <Paragraph>
            <TextBold className="pl-3">• Cloud Infrastructure (AWS)</TextBold>
            <br />
            Secure cloud hosting under strict data processing agreements
            <br />
            <br />
            <TextBold className="pl-3">• Analytics (Anonymised)</TextBold>
            <br />
            Aggregated usage data used only to improve the service
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Legal Requirements">
          <Paragraph>
            Data may only be disclosed if legally required to comply with lawful
            requests.
          </Paragraph>
        </InformationSubsection>
      </InformationSection>
      <InformationSection title="Your Rights & Controls" className="mt-20">
        <Paragraph>You are always in control of your data.</Paragraph>
        <Paragraph>
          <TextBold className="pl-3">• Delete Account</TextBold>
          <br />
          Permanently delete your account at any time
          <br />
          <br />
          <TextBold className="pl-3">• Access Your Data</TextBold>
          <br />
          Request a copy of your stored data
          <br />
          <br />
          <TextBold className="pl-3">• Correct Inaccuracies </TextBold>
          <br />
          Update or correct your information
          <br />
          <br />
          <TextBold className="pl-3">• Opt-Out</TextBold>
          <br />
          Manage notifications, analytics, and optional features
          <br />
          <br />
          <TextBold className="pl-3">• Data Portability</TextBold>
          <br />
          Export your data in a usable format
        </Paragraph>
      </InformationSection>
      <InformationSection title="Data Retention" className="mt-20">
        <Paragraph>You are always in control of your data.</Paragraph>
        <Paragraph>
          <TextBold className="pl-3">• Active Accounts</TextBold>
          <br />
          Data is retained while your account remains active
          <br />
          <br />
          <TextBold className="pl-3">• Inactive Accounts (12 months)</TextBold>
          <br />
          Data may be anonymised or deleted after prolonged inactivity
          <br />
          <br />
          <TextBold className="pl-3">• Account Deletion</TextBold>
          <br />
          All personal data is permanently deleted within 30 days
          <br />
          <br />
          <TextBold className="pl-3">• Temporary Processing Data</TextBold>
          <br />
          Short-term data is automatically purged within 24–72 hours
        </Paragraph>
      </InformationSection>
    </InformationPage>
  );
};

export default DataSafety;
