import { ImageUrls } from "../../../app_data/urls";

import "./profile_styles.scss";
import { ThemeStruct } from "../../../themes";
import { observer } from "mobx-react-lite";

type Props = {
  theme: ThemeStruct;
};
function Profile({ theme }: Props) {
  return (
    <div className="profile-main">
      <img
        src={ImageUrls.myProfile}
        alt="profile"
        style={{ border: `5px solid ${theme.borderColor}` }}
      />
      <div className="profile-content">
        <div className="headers">
          <h2>Marc Dwyer</h2>
          <h3>Web Developer</h3>
          <h4>US/EU citizen</h4>
        </div>
      </div>
    </div>
  );
}

export default observer(Profile);
