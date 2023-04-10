import withTransition from '@app/shared/hoc/image/withTransition';
import Image, { ImageProps } from 'next/image';

const TransitionImage = withTransition<ImageProps>(Image);

export default TransitionImage;
