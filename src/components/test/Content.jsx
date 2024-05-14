import { ContentInput, ContentLabel } from "./css/ContentStyled";

const Content = ({ children, desc, id, isChecked, onChange, isMulti }) => {
  return (
    <>
      <ContentInput
        type="checkbox"
        defaultChecked={isChecked}
        className="genreInput"
        id={id}
        onChange={onChange}
      />
      <ContentLabel htmlFor={id} className={`${isMulti && "Multi"}`}>
        <div>
          <h1>{children}</h1>
          <p>{desc}</p>
        </div>
      </ContentLabel>
    </>
  );
};
export default Content;
