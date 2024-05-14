import Content from "./Content";
import { GenreBox, MainTitle } from "./css/PageSectionStyled";

const PageSection = ({
  idname,
  dataset,
  main,
  sub,
  children,
  onChange,
  isMulti,
}) => {
  return (
    <div id={idname}>
      <MainTitle>{children}</MainTitle>
      <GenreBox>
        {dataset.map((item) => (
          <Content
            isChecked={false}
            isMulti={isMulti}
            key={`${idname}-${item["id"]}`}
            id={item["id"]}
            desc={item[`${sub}`]}
            onChange={onChange}
          >
            {item[`${main}`]}
          </Content>
        ))}
      </GenreBox>
    </div>
  );
};
export default PageSection;
