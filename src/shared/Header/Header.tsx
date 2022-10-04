import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './styles';
import { MenuRemixes } from '@/shared/MenuRemixes';

const Header = () => {
  return (
    <header>
      <Box sx={styles.filler} />
      <Box sx={styles.headerWrapper}>
        <Container sx={styles.header} maxWidth="lg">
          <>
            Test App
            <MenuRemixes />
          </>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
