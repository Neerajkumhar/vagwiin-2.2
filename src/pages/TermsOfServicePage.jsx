import React from 'react';
import LegalLayout from '../components/LegalLayout';

const TermsOfServicePage = () => {
  const lastUpdated = '18 April 2026';

  const sections = [
    {
      heading: 'About These Terms',
      paragraphs: [
        'These Terms of Use explain the rules for using the Vagwiin website and for engaging our services. By using our website or asking us for a quotation, you agree to them.',
        'These Terms are governed by the laws of India, including the Indian Contract Act, 1872, the Information Technology Act, 2000, the Sale of Goods Act, 1930, and the Consumer Protection Act, 2019.',
      ],
    },
    {
      heading: 'Our Services',
      paragraphs: [
        'Vagwiin provides enterprise IT infrastructure hardware and related services, including automation and smart solutions, security and surveillance, construction and infrastructure, food and catering services, CSR and social projects, bulk supply and procurement, and consulting and support.',
        'The exact scope, specification, price, and timeline for any work are set out in our written quotation, which forms the contract between us.',
      ],
    },
    {
      heading: 'Acceptable Use of This Website',
      paragraphs: ['You agree not to:'],
      points: [
        'Use the website for anything unlawful or in a way that harms others.',
        'Try to break into, hack, or disrupt the website or its hosting.',
        'Introduce viruses or harmful code.',
        'Copy, scrape, or republish our content, images, or code commercially without our written permission.',
        'Claim to be Vagwiin, or suggest you are connected to us, unless we have agreed it in writing.',
      ],
    },
    {
      heading: 'Intellectual Property',
      paragraphs: [
        'The website, including its design, text, graphics, logos, icons, and code, belongs to us and is protected by Indian copyright and trademark law. The Vagwiin name and logo are our trade marks.',
        'You may not use our name, logo, or brand elements without our written permission.',
        'Photography on this website comes from Unsplash under the Unsplash Licence, and our typeface is served by Google Fonts. These belong to their respective owners, and their use here does not imply endorsement.',
        'Our source code is published under the MIT Licence, which covers the code only and not our name, logo, written content, or third-party assets.',
      ],
    },
    {
      heading: 'Quotations, Prices, and Orders',
      paragraphs: [
        'A quotation is an offer and is not binding until we both accept it in writing. Prices are in Indian Rupees and exclude GST, unless a quotation clearly states otherwise.',
        'We may decline or cancel an order if an item is unavailable, if a price was listed in error, or if we suspect fraud. Where we cancel after you have paid, we will refund you.',
        'Goods remain our property until you have paid for them in full.',
      ],
    },
    {
      heading: 'Payment',
      paragraphs: [
        'Payment terms are set out in your quotation. If a quotation does not mention payment terms, payment is due within 30 days of the invoice date. All invoices include GST at the applicable rate.',
        'If payment is overdue, we may pause the work or withhold delivery until it is received.',
      ],
    },
    {
      heading: 'Delivery and Installation',
      paragraphs: [
        'Delivery and installation dates we give are estimates, not guaranteed dates, unless we have promised a date in writing.',
        'Delivery can be delayed by things outside our control, such as manufacturing delays, transport, weather, or site readiness. We will let you know as soon as we can if there is a significant delay.',
        'Please make sure the delivery site is accessible and ready, and provide power, network access, and approvals as needed. Delays caused by an unprepared site are not counted against us.',
        'Risk of damage passes to you on delivery, unless your quotation says otherwise.',
      ],
    },
    {
      heading: 'Warranty and Support',
      paragraphs: [
        'Warranty periods and support terms are set out in your quotation. Where goods carry a manufacturer warranty, that warranty comes from the manufacturer, and we will help you make the claim.',
        'Apart from the warranty stated in your quotation, we do not give any other warranty. We do not promise that any product or service will produce a particular business result.',
      ],
    },
    {
      heading: 'Liability',
      paragraphs: [
        'We are responsible for carrying out our work with reasonable skill and care. We are not liable for losses that were not reasonably foreseeable when the contract was made, such as lost profits or lost business.',
        'Our total liability for any claim is limited to the amount you paid us under the relevant quotation.',
        'Nothing in these Terms limits our liability for fraud, for deliberate misconduct, for death or personal injury caused by negligence, or for anything that cannot legally be limited under Indian law.',
      ],
    },
    {
      heading: 'Your Responsibilities',
      paragraphs: [
        'Please give us the information and access we reasonably need to do the work, and make sure what you give us is accurate. If we are delayed or incur extra cost because of inaccurate information or a failure to provide access, we are not responsible for that.',
      ],
    },
    {
      heading: 'Confidentiality',
      paragraphs: [
        'Both of us will keep the other’s confidential information confidential and use it only for the work we have agreed. This does not apply to information that is already public or that we must share with a court or government authority.',
      ],
    },
    {
      heading: 'Cancelling the Work',
      paragraphs: [
        'Either of us can end the work if the other seriously breaks these terms and does not fix the problem within 30 days of being told about it, or if the other becomes insolvent.',
        'If you end the work, you must pay for everything we have already supplied or done up to that date.',
      ],
    },
    {
      heading: 'Force Majeure',
      paragraphs: [
        'Neither of us is responsible for failing to meet our obligations because of events outside reasonable control, such as natural disasters, pandemics, war, government orders, strikes, transport failures, or delays from a manufacturer or supplier.',
      ],
    },
    {
      heading: 'Governing Law and Disputes',
      paragraphs: [
        'These Terms are governed by Indian law. The courts at Jodhpur, Rajasthan have exclusive jurisdiction over any dispute.',
        'Before going to court, we will both try to resolve the problem directly. Please raise any complaint with us first and we will aim to settle it within 30 days.',
      ],
    },
    {
      heading: 'Changes to These Terms',
      paragraphs: [
        'We may update these Terms as our services or the law change. The date at the bottom of this page shows when they were last updated. Continuing to use the website after that means you accept the changes.',
      ],
    },
    {
      heading: 'Contact Us',
      paragraphs: ['If you have any questions about these Terms, please get in touch with us.'],
    },
  ];

  return (
    <LegalLayout
      title="Terms of Use"
      subtitle="The rules for using the Vagwiin website and engaging our services, under the laws of India."
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
};

export default TermsOfServicePage;
