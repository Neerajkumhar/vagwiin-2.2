import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicyPage = () => {
  const lastUpdated = '18 April 2026';

  const sections = [
    {
      heading: 'About This Policy',
      paragraphs: [
        'This Privacy Policy explains how Vagwiin collects, uses, and protects your personal information when you visit our website or contact us for our services.',
        'Vagwiin is a business registered in India, providing enterprise IT infrastructure hardware, automation and smart solutions, security and surveillance, construction and infrastructure, food and catering, CSR projects, bulk supply and procurement, and consulting and support.',
        'This Policy is made in accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, both of which apply to us as a business operating in India.',
      ],
    },
    {
      heading: 'Information We Collect',
      paragraphs: [
        'We collect only the information we need to serve you. This may include:',
      ],
      points: [
        'Details you give us directly, such as your name, email address, phone number, organisation, and the contents of any message or enquiry you send us.',
        'Your correspondence with us, whether by email, phone, or WhatsApp.',
        'Technical information collected when you use our website, such as your IP address, browser type, device type, and the pages you visit.',
        'Business records, including quotations, invoices, orders, and delivery records.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      paragraphs: ['We use your personal information only for genuine business purposes, which include:'],
      points: [
        'Responding to your enquiries and quotation requests.',
        'Providing, installing, and supporting the services you engage us for.',
        'Preparing invoices and meeting our accounting and tax obligations under Indian law.',
        'Improving our website and keeping it secure.',
        'Sending you service updates, and marketing messages where you have agreed to receive them.',
        'Meeting legal requirements of Indian authorities, courts, or law enforcement.',
      ],
    },
    {
      heading: 'How We Share Your Information',
      paragraphs: [
        'We do not sell your personal information to anyone. We only share it where it is genuinely necessary, with:',
      ],
      points: [
        'Our staff and contractors who need it to do their jobs.',
        'Our IT and hosting providers, who are bound to keep your data confidential.',
        'Our auditors and legal advisers.',
        'Banks and payment processors, where needed to complete a payment.',
        'Government authorities or courts, where Indian law requires it.',
      ],
    },
    {
      heading: 'Your Rights Under Indian Law',
      paragraphs: [
        'Under the Digital Personal Data Protection Act, 2023, you have the right to:',
      ],
      points: [
        'Ask for a copy of the personal information we hold about you.',
        'Have inaccurate or incomplete information corrected or updated.',
        'Ask us to erase your personal information where it is no longer needed.',
        'Withdraw your consent at any time, without affecting what we have already done.',
        'Appoint someone to exercise your rights on your behalf, in case you are unable to.',
        'Complain to us if you are unhappy with how we have handled your information.',
        'Lodge a complaint with the Data Protection Board of India if our response does not satisfy you.',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'Cookies are small files that let a website remember your device. We use them only where they are needed to run our website properly. We do not use advertising or tracking cookies.',
      ],
    },
    {
      heading: 'Third-Party Services',
      paragraphs: [
        'Our website connects to a few third-party providers, each of which handles data under its own privacy policy:',
      ],
      points: [
        'Google Fonts, which supplies our typeface and therefore connects to Google servers.',
        'Unsplash, which supplies the photography on our website.',
        'WhatsApp, if you choose to message us there.',
        'Google Maps, which provides the map on our contact page.',
      ],
    },
    {
      heading: 'Data Security',
      paragraphs: [
        'We apply reasonable technical and organisational safeguards to protect your information against unauthorised access, loss, or misuse. These include restricted staff access, encryption where practical, and regular backups.',
        'No online system is completely secure. If we become aware of a data breach that is likely to cause harm, we will notify you and the Data Protection Board of India as the law requires.',
      ],
    },
    {
      heading: 'How Long We Keep Your Information',
      paragraphs: [
        'We keep your information only as long as we need it. Business and invoice records are kept for the period required by Indian tax and company law. Enquiry records are kept for a limited period after our last conversation with you. Newsletter subscriptions are kept until you unsubscribe.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'Our website and services are meant for businesses, not children. We do not knowingly collect information from anyone under 18. If you believe a child has given us information, please contact us and we will delete it.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      paragraphs: [
        'We may update this Policy from time to time as our services or the law change. If a change affects how we handle your information, we will let you know by email or a notice on our website.',
      ],
    },
    {
      heading: 'Contact Us',
      paragraphs: [
        'If you have any questions about this Policy, want to exercise your rights, or wish to raise a complaint, please contact us. We aim to respond within 30 days.',
      ],
    },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Vagwiin collects, uses, and protects your personal information, in line with the Digital Personal Data Protection Act, 2023."
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
};

export default PrivacyPolicyPage;
