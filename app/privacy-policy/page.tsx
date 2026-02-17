import { InformationPage } from "@/components/ui/InformationPage";
import { LastUpdated } from "@/components/ui/lastUpdate";
import { Paragraph } from "@/components/ui/paragraph";
import { InformationSection } from "@/components/ui/InformationSection";
import { InformationTitle } from "@/components/ui/InformationTitle";
import { InformationSubsection } from "@/components/ui/InformationSubsection";
import { InformationCallout } from "@/components/ui/InformationCallout";
import { InformationLink } from "@/components/ui/InformationLink";
import TextBold from "@/components/ui/TextBold";

const PrivacyPolicy = () => {
  return (
    <InformationPage>
      <LastUpdated date="January 1, 2026" />
      <InformationTitle>Privacy Policy</InformationTitle>

      <Paragraph>
        LYNA CAM UK Limited {`("LYNA", "we", "us", or "our")`} is committed to
        protecting your privacy and personal data. This Privacy Policy explains
        what data we collect, how we use and protect it, and the rights you have
        over your information.
        <br />
        <br />
        Our practices are designed to comply with the UK GDPR, EU GDPR,
        CCPA/CPRA, COPPA, and other applicable data protection laws.
      </Paragraph>

      <InformationSection title="1. Information We Collect">
        <Paragraph>
          We collect only the information necessary to provide, personalis, and
          improve LYNA.
        </Paragraph>

        <InformationSubsection title="1.1 Personal Information" first>
          <Paragraph indent="sm" spacing="tight">
            • Name and email address
            <br />
            • Date of birth or age range (for eligibility and personalization)
            <br />
            • Account login credentials and security information
            <br />• Optional profile details such as display name or avatar
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="1.2 Health & Wellness Information (Optional)">
          <Paragraph spacing="tight">
            LYNA focuses on wellness and performance insights. You may choose to
            provide:
          </Paragraph>
          <Paragraph indent="sm">
            • Menstrual cycle data (cycle dates, symptoms, flow intensity)
            <br />
            • Wellness and lifestyle inputs (energy, mood, sleep, stress,
            training)
            <br />
            • Nutrition, hydration, and meal logs
            <br />• Personal notes related to wellness or performance goals
          </Paragraph>
          <Paragraph>
            Some of this data may be considered sensitive under privacy laws. We
            only process it with your consent and where legally permitted
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="1.3 Device & Usage Information">
          <Paragraph indent="sm" spacing="tight">
            • Device type, operating system, language settings
            <br />
            • App usage data (features used, session duration)
            <br />
            • Crash reports and diagnostics
            <br />• IP address and general location (country/region only, no
            precise GPS unless enabled)
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="1.4 Cookies & Similar Technologies">
          <Paragraph spacing="tight">
            We use cookies and similar technologies to:
          </Paragraph>
          <Paragraph indent="sm" spacing="none">
            • Enable core functionality
            <br />
            • Remember preferences
            <br />• Measure and improve performance
          </Paragraph>
          <Paragraph spacing="none">
            More details are available in our Cookie Policy at{" "}
            <InformationLink href="/cookie-policy">
              lyna.cam/cookie-policy.
            </InformationLink>
          </Paragraph>
        </InformationSubsection>
      </InformationSection>

      <InformationSection
        title="2. Face Data & Facial Analysis (Wellness Only)"
        className="mt-20"
      >
        <InformationCallout label="Important:">
          LYNA does not provide medical diagnosis or treatment. Face data is
          used solely for wellness personalization.
        </InformationCallout>

        <InformationSubsection title="What We Collect">
          <Paragraph indent="sm">
            • Selfies captured via the in-app camera
            <br />• Facial analysis metrics such as:
          </Paragraph>
          <Paragraph indent="md" spacing="none">
            • Skin tone and undertone
            <br />
            • General complexion indicators
            <br />
            • Facial symmetry measurements
            <br />• Lighting quality assessment
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="What We Do NOT Collect">
          <Paragraph indent="sm">
            • Biometric identifiers or facial recognition data
            <br />
            • Face ID or authentication templates
            <br />
            • Permanent facial fingerprints
            <br />• Identification or verification data
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="How We Use Face Data">
          <Paragraph indent="sm">
            • Personalized wellness recommendations
            <br />
            • Cycle phase correlation insights
            <br />
            • Hydration and lifestyle suggestions
            <br />
            • Optional progress tracking over time
            <br />• Image quality checks for accurate analysis
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="What We Never Use Face Data For">
          <Paragraph indent="sm">
            • Medical diagnosis
            <br />
            • Identity verification
            <br />
            • Advertising or marketing
            <br />
            • Selling or sharing with third parties
            <br />• Training external AI models
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="Storage & Security">
          <Paragraph indent="sm">
            • Stored locally on your device using encrypted storage
            <br />
            • Optional encrypted cloud backup (AWS UK/EU)
            <br />
            • AES-256 encryption at rest
            <br />• TLS 1.3 encryption in transit
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="Retention">
          <Paragraph indent="sm">
            • Active accounts: retained while enabled
            <br />
            • Inactive accounts (12 months): automatically deleted
            <br />
            • Account deletion: permanently deleted within 30 days
            <br />• Temporary processing data: deleted within 24 hours
          </Paragraph>
        </InformationSubsection>

        <InformationSubsection title="Your Face Data Rights">
          <Paragraph indent="sm">
            • Active accounts: retained while enabled
            <br />
            • Inactive accounts (12 months): automatically deleted
            <br />
            • Account deletion: permanently deleted within 30 days
            <br />• Temporary processing data: deleted within 24 hours
          </Paragraph>
        </InformationSubsection>

        <Paragraph className="mt-10">
          Manage these settings in{" "}
          <TextBold>Settings → Privacy → Face Data Management</TextBold> or
          contact <TextBold>hello@lyna.com.</TextBold>
        </Paragraph>
      </InformationSection>

      <InformationSection
        title="3. How We Use Your Information"
        className="mt-20"
      >
        <Paragraph>We use your data to:</Paragraph>
        <Paragraph indent="sm" spacing="none">
          • Provide and personalise LYNA features
          <br />
          • Generate wellness insights and recommendations
          <br />
          • Send reminders and service-related communications
          <br />
          • Maintain security and prevent misuse
          <br />
          • Improve product performance and user experience
          <br />• Comply with legal obligations
        </Paragraph>
      </InformationSection>

      <InformationSection
        title="4. Legal Bases for Processing"
        className="mt-20"
      >
        <Paragraph>Where required, we rely on:</Paragraph>
        <Paragraph indent="sm" spacing="none">
          <strong>• Consent –</strong> for health and face data
          <br />
          <strong>• Contractual necessity –</strong> to provide the service
          <br />
          <strong>• Legitimate interests –</strong> to improve and secure LYNA
          <br />
          <strong>• Legal obligations –</strong> to comply with laws
        </Paragraph>
      </InformationSection>

      <InformationSection
        title="5. Data Sharing & Disclosure"
        className="mt-20"
      >
        <InformationSubsection title="We Never Sell Your Data">
          <Paragraph>
            Your personal, health, or face data is never sold.
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection
          title="Trusted Service Providers"
          className="mt-10"
        >
          <Paragraph>
            <strong>Cloud Infrastructure:</strong> Amazon Web Services (AWS) –
            UK & EU
            <br />
            <strong>Analytics:</strong> Anonymised and aggregated only
            <br />
            <strong>Customer Support:</strong> Minimal access, only with consent
            <br />
            <br />
            All providers operate under strict Data Processing Agreements.
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Legal Disclosure" className="mt-10">
          <Paragraph>
            Data is shared only when legally required. You will be notified
            unless prohibited by law
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="Business Transfers" className="mt-10">
          <Paragraph>In the event of a merger or acquisition:</Paragraph>
          <Paragraph indent="sm" spacing="none">
            • You will be notified at least 30 days in advance
            <br />
            • Your rights remain protected
            <br />• You may delete your data prior to transfer
          </Paragraph>
        </InformationSubsection>
      </InformationSection>

      <InformationSection title="6. International Transfers" className="mt-20">
        <Paragraph>
          Data is primarily stored in the UK and EU. If transferred elsewhere,
          appropriate safeguards (such as Standard Contractual Clauses) are
          applied.
        </Paragraph>
      </InformationSection>

      <InformationSection title="7. Data Retention Summary" className="mt-20">
        <div className="mt-8 flex items-center gap-x-16 w-max">
          <div>
            <TextBold>Data Type</TextBold>
            <Paragraph>
              Face Data
              <br />
              Cycle & Wellness Data
              <br />
              Account Information
              <br />
              Support Communications
              <br />
              Anonymised Analytics
              <br />
              Temporary Processing Data
            </Paragraph>
          </div>
          <div>
            <TextBold>Retention Period</TextBold>
            <Paragraph>
              Until deletion or 12 months inactivity
              <br />
              Until deletion or 12 months inactivity
              <br />
              Until deletion + 30 days
              <br />
              2 years
              <br />
              Indefinite
              <br />
              Max 24 hours
            </Paragraph>
          </div>
        </div>
      </InformationSection>

      <InformationSection title="8. Children’s Privacy" className="mt-20">
        <Paragraph>
          LYNA is not intended for children below the legal age of digital
          consent. We do not knowingly collect data from children without
          required consent.
        </Paragraph>
      </InformationSection>

      <InformationSection title="9. Your Rights" className="mt-20">
        <Paragraph>Depending on your location, you may:</Paragraph>
        <Paragraph indent={"sm"}>
          • Access your data
          <br />
          • Correct inaccuracies
          <br />
          • Request deletion
          <br />
          • Restrict or object to processing
          <br />
          • Export your data
          <br />• Withdraw consent
        </Paragraph>
        <Paragraph>
          Requests can be made in-app or via{" "}
          <TextBold>hello@lyna.com.</TextBold>
        </Paragraph>
      </InformationSection>

      <InformationSection
        title="10. AI & Wellness Disclaimer"
        className="mt-20"
      >
        <Paragraph>
          LYNA uses AI to generate wellness insights. Outputs are informational
          only and not medical advice. Always consult a healthcare professional
          for medical concerns.
        </Paragraph>
      </InformationSection>

      <InformationSection title="11. Marketing Preferences" className="mt-20">
        <Paragraph>You control marketing communications via:</Paragraph>
        <Paragraph indent={"sm"}>
          • App settings
          <br />
          • Unsubscribe links App settings
          <br />• Contacting <TextBold>hello@lyna.com</TextBold>
        </Paragraph>
      </InformationSection>

      <InformationSection title="12. Regional Rights" className="mt-20">
        <TextBold className="mt-8">GDPR (UK, EEA, Switzerland)</TextBold>
        <Paragraph>
          Includes rights of access, correction, deletion, portability,
          objection, and complaint to the ICO.
        </Paragraph>
        <TextBold className="mt-8">California (CCPA/CPRA)</TextBold>
        <Paragraph>
          Includes rights to know, delete, correct, and limit use of sensitive
          data. We do not sell data.
        </Paragraph>
      </InformationSection>

      <InformationSection
        title="13. Biometric & Face Recognition Clarification"
        className="mt-20"
      >
        <Paragraph>
          LYNA does not use facial recognition or biometric identification
          technologies and complies with applicable biometric privacy laws.
        </Paragraph>
      </InformationSection>

      <InformationSection title="14. Security Measures" className="mt-20">
        <Paragraph indent={"sm"}>
          • AES-256 encryption at rest
          <br />
          • TLS 1.3 encryption in transit
          <br />
          • Role-based access controls
          <br />
          • Multi-factor authentication
          <br />
          • Regular security audits
          <br />• Incident response procedures
        </Paragraph>
      </InformationSection>

      <InformationSection
        title="15. Third-Party Integrations"
        className="mt-20"
      >
        <Paragraph>Optional integrations include:</Paragraph>
        <Paragraph indent={"sm"}>
          • Apple Health / Google Fit (user-authorized only)
          <br />
          • Anonymised analytics services
          <br />• Secure payment processors (PCI compliant)
        </Paragraph>
      </InformationSection>

      <InformationSection title="16. Changes to This Policy" className="mt-20">
        <Paragraph>
          We will notify you of material changes via the app, email, or website
          with at least 30 days’ notice.
        </Paragraph>
      </InformationSection>

      <InformationSection title="Contact" className="mt-20">
        <Paragraph>
          Email: <TextBold>hello@lyna.com</TextBold>
          <br />
          Data Protection Officer: <TextBold>dpo@lyna.com</TextBold>
          <br />
          <br />
          By using LYNA, you acknowledge that you have read and understood this
          Privacy Policy
        </Paragraph>
      </InformationSection>
    </InformationPage>
  );
};

export default PrivacyPolicy;
