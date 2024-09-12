import "./App.css";
import CardContainer from "./components/Card/CardContainer";
import LinkButton from "./components/Links/LinkButton";
import LinksContainer from "./components/Links/LinksContainer";
import ProfileDescription from "./components/ProfileDescription/ProfileDescription";
import ProfileHeaderContainer from "./components/ProfileHeader/ProfileHeaderContainer";
import ProfileLocation from "./components/ProfileHeader/ProfileLocation";
import ProfileName from "./components/ProfileHeader/ProfileName";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import ProfileImageContainer from "./components/ProfileImage/ProfileImageContainer";

function App() {
  return (
    <div className="w-full h-full items-center flex justify-center py-20 px-8">
      <CardContainer>
        <ProfileImageContainer>
          <ProfileImage src="src/assets/images/avatar-jessica.jpeg" />
        </ProfileImageContainer>
        <ProfileHeaderContainer>
          <ProfileName>Jessica Randall</ProfileName>
          <ProfileLocation>London, United Kingdom</ProfileLocation>
        </ProfileHeaderContainer>
        <ProfileDescription>
          "Front-end developer and avid reader."
        </ProfileDescription>
        <LinksContainer>
          <LinkButton>GitHub</LinkButton>
          <LinkButton>Frontend Mentor</LinkButton>
          <LinkButton>LinkedIn</LinkButton>
          <LinkButton>Twitter</LinkButton>
          <LinkButton>Instagram</LinkButton>
        </LinksContainer>
      </CardContainer>
    </div>
  );
}

export default App;
