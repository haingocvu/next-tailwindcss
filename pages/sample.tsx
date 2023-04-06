import Carousel from '@app/shared/components/carousel/Carousel';
import Tag from '@app/shared/components/tag/Tag';
import { NextPageWithLayout } from '@app/shared/models/PageInterface';

const Sample: NextPageWithLayout = () => {
  return (
    <Carousel
      items={[
        'photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        'photo-1617286647344-95c86d56748a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        'photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        'photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      ]}
    />
  );
};

export default Sample;

Sample.getLayout = (page) => page;
