import React, { FC, ReactElement } from "react";
import styles from "./code-preview.module.css";

type Props = {
  content: string;
  imgURL: string;
};

const CodePreview = ({ content, imgURL }: Props): ReactElement => {
  return (
    <div className={styles.codeConainer}>
      <pre>
        <code>{content}</code>
      </pre>
      {imgURL && <img src={imgURL} className={styles.imageStyles} />}
    </div>
  );
};

export default CodePreview;
