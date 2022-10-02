import React from 'react';
import Tag from '../../../components/common/Tag';

interface Props {
  title: string
  icon: string
}

const TagComponent = ({ title, icon }: Props) => {
  return <Tag icon={icon} title={title} />;
}

export default TagComponent;

TagComponent.defaultProps = {
  title: 'DeFi',
  icon: 'https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/De_Fi_c2cbe56025.svg',
};
