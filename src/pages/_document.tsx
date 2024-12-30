import {
  documentGetInitialProps,
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from '@mui/material-nextjs/v15-pagesRouter';
import {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang='en'>
      <Head>
        <meta name='emotion-insertion-point' content='' />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
