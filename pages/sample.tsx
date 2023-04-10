import Carousel from '@app/shared/components/carousel/Carousel';
import { NextPageWithLayout } from '@app/shared/models/PageInterface';
import { getBase64ImageUrl } from '@app/shared/utils/image/optimize';
import { GetStaticProps } from 'next';

const items = [
  'photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'photo-1617286647344-95c86d56748a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
];

interface IPageProps {
  slideItems: Array<any>;
}

const Sample: NextPageWithLayout<IPageProps> = (props) => {
  const { slideItems } = props;
  return <Carousel items={slideItems} />;
};

export default Sample;

export const getStaticProps: GetStaticProps = async (ctx) => {
  let itemsWithBlurUrl: Array<any> = [];
  try {
    const blurImgUrls = await Promise.all(
      items.map((img) =>
        getBase64ImageUrl(`https://images.unsplash.com/${img}`)
      )
    );

    itemsWithBlurUrl = items.map((it, i) => ({
      url: it,
      blurUrl: blurImgUrls[i],
    }));
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      slideItems: itemsWithBlurUrl,
    },
  };
};

Sample.getLayout = (page) => page;
