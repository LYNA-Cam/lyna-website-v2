import { InformationCallout } from "@/components/ui/InformationCallout";
import { InformationPage } from "@/components/ui/InformationPage";
import { InformationSection } from "@/components/ui/InformationSection";
import { InformationSubsection } from "@/components/ui/InformationSubsection";
import { InformationTitle } from "@/components/ui/InformationTitle";
import TextBold from "@/components/ui/TextBold";
import Typography from "@/components/ui/Typography";
import { LastUpdated } from "@/components/ui/lastUpdate";
import { Paragraph } from "@/components/ui/paragraph";
import React from "react";

type TableItem = {
  cookieName: string;
  category: string;
  purpose: string;
  duration: string;
  provider: string;
};

const tableLabels = [
  "Cookie Name",
  "Category",
  "Purpose",
  "Duration",
  "Provider",
];

const tableItems: TableItem[] = [
  {
    cookieName: "session_id",
    category: "Strictly Necessary",
    purpose: "Maintains user session",
    duration: "Session",
    provider: "LYNA",
  },
  {
    cookieName: "preferences",
    category: "Functionality",
    purpose: "Stores user preferences",
    duration: "1 year",
    provider: "LYNA",
  },
  {
    cookieName: "_ga, _gid",
    category: "Analytics",
    purpose: "Google Analytics tracking",
    duration: "2 years / 24 hours",
    provider: "Google",
  },
  {
    cookieName: "marketing_id",
    category: "Marketing",
    purpose: "Campaign performance tracking",
    duration: "6 months",
    provider: "LYNA / Third party",
  },
];

const CookiePolicy = () => {
  return (
    <InformationPage>
      <LastUpdated date="Last Updated: January 1, 2026" />
      <InformationTitle>Cookie Policy</InformationTitle>
      <Paragraph>
        At LYNA, we are committed to respecting your privacy and ensuring your
        online experience is transparent, secure, and in your control. This
        Cookie Policy explains what cookies are, how and why we use them, and
        how you can manage your preferences.
        <br />
        <br />
        This policy applies to the LYNA website (the “Site”) and any related
        online services.
      </Paragraph>
      <InformationSection title="1. What Are Cookies?" className="mt-20">
        <Paragraph>
          Cookies are small text files placed on your device (computer,
          smartphone, or tablet) when you visit a website. They are widely used
          to make websites function properly, improve user experience, and
          provide insights to site owners.
          <br />
          Cookies may be:.
        </Paragraph>
        <Paragraph indent={"sm"} className="mt-4">
          <TextBold>• Session cookies –</TextBold> deleted when you close your
          browser
          <br />
          <TextBold>• Persistent cookies – </TextBold>
          remain on your device until they expire or are deleted
        </Paragraph>
        <Paragraph className="mt-4">
          We also use similar technologies such as pixels, web beacons, SDKs,
          and local storage. For simplicity, we refer to all of these as
          “cookies” in this policy.
        </Paragraph>
      </InformationSection>
      <InformationSection title="2. Why We Use Cookies" className="mt-20">
        <Paragraph>We use cookies for the following purposes:</Paragraph>
        <Paragraph>
          <TextBold className="pl-3">• Essential Functionality</TextBold>
          <br />
          Enable core site features such as secure access, navigation, and
          protected areas.
          <br />
          <TextBold className="pl-3">• Preference Storage</TextBold>
          <br />
          Remember your settings, such as language, theme, and cookie choices.
          <br />
          <TextBold className="pl-3">• Performance & Analytics</TextBold>
          <br />
          Understand how visitors use the Site so we can improve performance and
          usability.
          <br />
          <TextBold className="pl-3">• Security</TextBold>
          <br />
          Detect and prevent fraud, abuse, and security threats.
          <br />
          <TextBold className="pl-3">• Personalization</TextBold>
          <br />
          Tailor content and features to your usage patterns.
          <br />
          <TextBold className="pl-3">• Marketing (with consent)</TextBold>
          <br />
          Measure the effectiveness of campaigns and deliver relevant content.
        </Paragraph>
      </InformationSection>
      <InformationSection title="3. Types of Cookies We Use" className="mt-20">
        <InformationSubsection title="3.1 Strictly Necessary Cookies">
          <Paragraph className="mb-8">
            These cookies are essential for the Site to function and cannot be
            switched off.
          </Paragraph>
          <TextBold>Examples:</TextBold>
          <Paragraph indent={"sm"} spacing={"tight"}>
            • Session management
            <br />
            • Authentication and security
            <br />• Fraud prevention
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="3.2 Preference (Functionality) Cookies">
          <Paragraph className="mb-8">
            These cookies remember your choices and preferences.
          </Paragraph>
          <TextBold>Examples:</TextBold>
          <Paragraph indent={"sm"} spacing={"tight"}>
            • Language selection
            <br />• Saved settings or check-in preferences
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="3.3 Performance & Analytics Cookies">
          <Paragraph className="mb-8">
            These cookies collect anonymised information about how visitors
            interact with the Site.
          </Paragraph>
          <TextBold>Examples:</TextBold>
          <Paragraph indent={"sm"} spacing={"tight"}>
            • Page visits and traffic sources
            <br />• Feature usage and navigation patterns
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="3.4 Targeting & Marketing Cookies">
          <Paragraph className="mb-8">
            With your explicit consent, these cookies help us understand the
            effectiveness of our communications and provide relevant content.
          </Paragraph>
          <TextBold>Examples:</TextBold>
          <Paragraph indent={"sm"} spacing={"tight"}>
            • Campaign performance tracking
            <br />• Content personalization
          </Paragraph>
        </InformationSubsection>
        <InformationSubsection title="3.5 Third-Party Cookies">
          <Paragraph>
            Some cookies may be set by trusted third parties integrated into the
            Site, such as analytics providers or embedded media platforms. These
            third parties may collect data according to their own privacy
            policies.
          </Paragraph>
        </InformationSubsection>
      </InformationSection>
      <InformationSection
        title="4. How Long Cookies Stay on Your Device"
        className="mt-20"
      >
        <InformationCallout label="Session Cookies:">
          Deleted automatically when you close your browser
        </InformationCallout>
        <InformationCallout label="Persistent Cookies:" className="mt-0">
          Remain until expiry or manual deletion (duration varies by purpose)
        </InformationCallout>
      </InformationSection>
      <InformationSection
        title="5. Managing Your Cookie Preferences"
        className="mt-20"
      >
        <Paragraph>You have full control over your cookie choices:</Paragraph>
        <Paragraph>
          <TextBold className="pl-3">• Cookie Consent Banner</TextBold>
          <br />
          Choose to accept, reject, or customize cookies when you first visit
          the Site.
          <br />
          <br />
          <TextBold className="pl-3">• Cookie Settings Panel</TextBold>
          <br />
          Update or withdraw consent at any time via the Cookie Settings link at
          the bottom of each page.
          <br />
          <br />
          <TextBold className="pl-3">• Browser Controls</TextBold>
          <br />
          Manage or delete cookies through your browser settings (note: some
          features may not function properly).
          <br />
          <br />
          <TextBold className="pl-3">• Opt-Out Tools</TextBold>
          <br />
          Use third-party opt-out tools such as the Google Analytics Opt-Out
          Browser Add-on where applicable.
        </Paragraph>
      </InformationSection>
      <InformationSection title="6. Cookies We Use" className="mt-20">
        <Paragraph>
          Below is a non-exhaustive example of cookies that may be used on the
          Site:
        </Paragraph>
        <table className="border border-gray mt-8">
          <thead className="text-left border-b border-b-gray">
            <tr>
              {tableLabels.map((label, index) => (
                <Typography
                  as="th"
                  variant={"h6"}
                  className="font-lora font-semibold p-6"
                  key={`head-${index}`}
                >
                  {label}
                </Typography>
              ))}
            </tr>
          </thead>
          <tbody className="text-left">
            {tableItems.map(
              (
                { cookieName, category, purpose, duration, provider },
                index
              ) => (
                <tr key={`item-${index}`}>
                  <th className="pl-6">
                    <Paragraph spacing={"none"}>{cookieName}</Paragraph>
                  </th>
                  <th className="pl-6">
                    <Paragraph spacing={"none"}>{category}</Paragraph>
                  </th>
                  <th className="pl-6">
                    <Paragraph spacing={"none"}>{purpose}</Paragraph>
                  </th>
                  <th className="pl-6">
                    <Paragraph spacing={"none"}>{duration}</Paragraph>
                  </th>
                  <th className="pl-6 pr-6">
                    <Paragraph spacing={"none"}>{provider}</Paragraph>
                  </th>
                </tr>
              )
            )}
          </tbody>
        </table>
        <Paragraph>
          The cookies we use may change over time. For the most up-to-date list,
          please refer to the Cookie Settings panel.
        </Paragraph>
      </InformationSection>
      <InformationSection
        title="7. Third-Party Cookies & Social Media"
        className="mt-20"
      >
        <Paragraph>
          The Site may include links to or content from third-party platforms
          (such as Instagram, TikTok, or embedded videos). These services may
          set their own cookies and collect data in accordance with their
          privacy policies. LYNA does not control these cookies.
        </Paragraph>
      </InformationSection>
      <InformationSection
        title="8. Updates to This Cookie Policy"
        className="mt-20"
      >
        <Paragraph>
          We may update this Cookie Policy to reflect changes in technology,
          law, or our practices. Material changes will be communicated via the
          Site or other appropriate means. Please review this policy
          periodically.
        </Paragraph>
      </InformationSection>
      <InformationSection title="9. Contact Us" className="mt-20">
        <Paragraph>
          If you have questions or requests related to cookies, please contact
          us:
        </Paragraph>
        <InformationCallout label="Email: ">hello@lyna.com</InformationCallout>
        <Paragraph>
          By continuing to use the LYNA website, you acknowledge that you have
          read and understood this Cookie Policy.
        </Paragraph>
      </InformationSection>
    </InformationPage>
  );
};

export default CookiePolicy;
