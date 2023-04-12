import { Clear } from "@mui/icons-material";

const NotesItem = () => {
  return (
    <div className="notes__item">
      <div className="item__text-wrapper">
        <p>
          Длинный текстДлинный текстДлинный текстДлинный текстДлинный
          текстДлинный текст Длинный текстДлинный текстДлинный текстДлинный
          текстДлинный текстДлинный текст Длинный текстДлинный текстДлинный
          текстДлинный текстДлинный текстДлинный текст Длинный текстДлинный
          текстДлинный текстДлинный текстДлинный текстДлинный текст Длинный
          текстДлинный текстДлинный текстДлинный текстДлинный текстДлинный текст
        </p>
      </div>
      <button className="notes__btn notes__btn--delete">
        <Clear className="clear-icon" />
      </button>
    </div>
  );
};

export default NotesItem;
