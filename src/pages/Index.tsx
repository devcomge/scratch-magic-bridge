import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CourseRoadmap from '@/components/CourseRoadmap';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CourseRoadmap />
    </Layout>
  );
};

export default Index;
