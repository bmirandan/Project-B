import MainLayout from "../../../components/layouts/MainLayout";
import NavigateButton from "../../../components/NavigateButton/NavigateButton";
import ButtonLayout from "../../../components/layouts/ButtonLayout";

export default function About() {
  return <NavigateButton title="Home" description="Return" />;
}

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <ButtonLayout>{page}</ButtonLayout>
    </MainLayout>
  );
};
