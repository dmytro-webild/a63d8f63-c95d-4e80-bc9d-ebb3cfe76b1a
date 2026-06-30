import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Breaking the Mould"
      title="Building What's Next."
      description="Helping ambitious businesses create modern digital experiences that inspire confidence, strengthen brands and support long-term growth."
      primaryButton={{
        text: "Start Your Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/group-diverse-people-having-business-meeting_53876-20851.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/group-graphic-designers-smiling-sitting-together_1170-778.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lights-prisms-effect-close-up_23-2148917880.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111395.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/successful-business-people-with-ideas_53876-25182.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-technology-be-creative-futuristic-concept_53876-133718.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Business Deserves Better."
      descriptions={[
        "Too many agencies offer generic solutions and transactional relationships. We believe every business deserves a digital presence that reflects their true identity.",
        "Our approach combines strategic thinking and design to help businesses stand out. We don't just build websites; we build confidence and lasting impressions.",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="why" data-section="why">
    <SectionErrorBoundary name="why">
          <FeaturesBentoGrid
      tag="Why Us"
      title="Beyond the Average."
      description="We challenge conventional thinking to make your digital presence a strategic asset."
      features={[
        {
          title: "Forward-Thinking",
          description: "We build for tomorrow's business needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-arrangement-with-fir-tree-its-shadow_23-2148350155.jpg",
        },
        {
          title: "Premium Design",
          description: "Crafted with attention to detail.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-arrangement-3d-glasses_23-2149487729.jpg",
        },
        {
          title: "Growth Focus",
          description: "Solutions designed for scale.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-businessman-uses-digital-graphs-analytics-improve-finance-models_482257-126516.jpg",
        },
        {
          title: "Transparent",
          description: "Direct, clear, and honest partnership.",
          imageSrc: "http://img.b2bpic.net/free-photo/photovoltaics-factory-manager-chatting-with-engineer-about-energy-production_482257-120833.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Our Services"
      title="Digital Experiences that Inspire."
      description="We offer a full suite of services designed to help you stand out."
      items={[
        {
          title: "Website Design",
          description: "Custom, high-performing websites.",
          imageSrc: "http://img.b2bpic.net/free-photo/idea-concept-with-light-bulb_23-2149105825.jpg",
        },
        {
          title: "Branding",
          description: "Strong, cohesive identity systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/marble-with-black-texture-background_53876-63494.jpg",
        },
        {
          title: "Digital Strategy",
          description: "Making smarter growth decisions.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-mockup-with-blank-screen-gray-background_9975-133666.jpg",
        },
        {
          title: "Website Refresh",
          description: "Modernizing legacy online assets.",
          imageSrc: "http://img.b2bpic.net/free-photo/solar-panels-factory-engineer-analyzes-performance-data-with-green-screen-laptop_482257-126124.jpg",
        },
        {
          title: "Support",
          description: "Secure, fast, and optimized.",
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-green-checkmark-success-symbol-dark-cosmic-background_84443-91492.jpg",
        },
        {
          title: "Consulting",
          description: "Strategic guidance for growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/office-supplies_23-2148103913.jpg",
        },
        {
          title: "Innovation",
          description: "New solutions for your niche.",
          imageSrc: "http://img.b2bpic.net/free-photo/student-home-taking-notes-while-watching-presentation-closeup_482257-118737.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Our Impact"
      title="Results Driven."
      description="Building the future of your business through proven expertise."
      metrics={[
        {
          value: "100+",
          description: "Projects Delivered",
        },
        {
          value: "50+",
          description: "Happy Partners",
        },
        {
          value: "95%",
          description: "Client Retention",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Client Stories"
      title="Partnership over Transaction."
      description="Hear what our ambitious partners have to say."
      testimonials={[
        {
          name: "Sarah J.",
          role: "CEO",
          company: "GrowthCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-having-online-meeting-work_23-2148940758.jpg",
        },
        {
          name: "Michael C.",
          role: "Founder",
          company: "TechStart",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-standing_1187-1543.jpg",
        },
        {
          name: "Emily R.",
          role: "Director",
          company: "DesignLab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-woman-black-jacket-happy-short-haired-girl-dark-suit-widely-sincerely-smiles-isolated-background_197531-18508.jpg",
        },
        {
          name: "David K.",
          role: "Manager",
          company: "BizScale",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-successful-business-colleagues-meeting-outside_1262-21161.jpg",
        },
        {
          name: "Jessica M.",
          role: "Lead",
          company: "BuildRight",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Disrupt?"
      text="Your business deserves more than an ordinary online presence. Let's create something that reflects your ambition."
      primaryButton={{
        text: "Book Consultation",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
