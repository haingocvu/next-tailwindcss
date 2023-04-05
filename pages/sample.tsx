import Tag from '@app/shared/components/tag/Tag';
import { NextPageWithLayout } from '@app/shared/models/PageInterface';

const Sample: NextPageWithLayout = () => {
  return (
    <div>
      <Tag>New</Tag>
    </div>
  );
};

export default Sample;

Sample.getLayout = (page) => page;
