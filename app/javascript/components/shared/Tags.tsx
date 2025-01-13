import { styled } from '@mui/system';

const Tag = styled('div')(({ backgroundColor }: { backgroundColor: string }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 12px',
  height: '32px',
  borderRadius: '16px',
  backgroundColor: backgroundColor || '#e0e0e0',
  color: 'black',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '32px',
  whiteSpace: 'nowrap',
  margin: '4px',
  cursor: 'default',
}));

const TagContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  maxWidth: '130px',
  width: '130px'
});

const backgroundColors: { [key: string]: string } = {
  '導演': '#ffe0b2',
  '構圖': '#c8e6c9',
  '美術': '#bbdefb',
  '原畫': '#ffcdd2',
  '動畫': '#d1c4e9',
  '補間': '#f0f4c3',
  '上色': '#b2ebf2',
  '音樂': '#ffccbc',
  '後製': '#d7ccc8',
  '背景': '#f8bbd0',
};

const Tags = ({ positions }: { positions: string[] }) => (
  <TagContainer>
    {positions.map((position) => (
      <Tag key={position} backgroundColor={backgroundColors[position] || '#e0e0e0'}>
        {position}
      </Tag>
    ))}
  </TagContainer>
);

export default Tags
