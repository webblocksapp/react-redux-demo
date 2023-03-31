import { Box, Typography } from '@components';

export interface WatermarkProps {
  children?: React.ReactNode;
  text?: string;
}

export const Watermark: React.FC<WatermarkProps> = ({ children, text }) => {
  return (
    <Box left={0} top={0} position="fixed" width="100%" height="100%" zIndex={1}>
      {text && (
        <Box
          style={{ background: 'yellow' }}
          position="absolute"
          width="100%"
          maxWidth={200}
          textAlign="center"
          right={0}
          bottom={0}
        >
          <Typography fontSize={30}>{text}</Typography>
        </Box>
      )}
      {children}
    </Box>
  );
};
