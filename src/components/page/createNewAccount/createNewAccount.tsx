import {makeStyles, Box, Container, Grid, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {spacing, hrmangoColors, fontWeight400} from 'lib/hrmangoTheme'
import {Global} from 'components/organism/shell'
import bgLogin from '../../../images/bgLogin.png'
import LogoIcon from 'lib/atom/icons/logoIcon/logoIcon'

const useStyles = makeStyles((theme) => ({
  label: {
    ...theme.typography.overline,
    color: hrmangoColors.onSurfaceLight.mediumEmphasis,
    marginBottom: spacing[0],

    textTransform: 'uppercase'
  },
  textField: {
    width: '100%',
    marginBottom: spacing[32],
    '& .MuiFilledInput-input': {
      padding: '16px 13px',
      height: spacing[48],
      cornerRadius: '8px'
    }
  },
  button: {
    backgroundColor: hrmangoColors.dark,
    color: hrmangoColors.white
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    //borderWidth: 5,
    borderTopRightRadius: '32px',
    borderBottomRightRadius: '32px',
    backfaceVisibility: 'hidden',
    objectFit: 'contain',
    background: `url(${bgLogin}) no-repeat center`,
    backgroundSize: 'cover'
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  logoText: {
    paddingLeft: spacing[8],
    fontFamily: 'OpenSans-Bold, Open Sans',
    color: hrmangoColors.dark,
    fontWeight: fontWeight400,
    fontSize: 18,
    lineHeight: 1.428,
    letterSpacing: '0.25px'
  },
  logoSubText: {
    display: 'flex',
    justifyContent: 'end',
    fontSize: 10
  },
  forgotPasswordTitle: {
    color: '4d4d4d',
    fontSize: 28
  }
}))

export const CreateNewAccount = ({match}) => {
  const classes = useStyles()

  return (
    <>
      <Global />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} className={classes.imageContainer} />
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Box
            component='main'
            sx={{
              alignContent: 'center'
            }}
          >
            <Container>
              <Box sx={{py: '8px', justifyContent: 'center', display: 'flex'}}>
                <LogoIcon width='50.794' height='32' viewBox='0 0 50 32' />
                <Box className={classes.logoText}>
                  <span>GateKeeper</span>
                  <Box className={classes.logoSubText}>
                    <span>by HRMango</span>
                  </Box>
                </Box>
              </Box>
              <Box sx={{justifyContent: 'center', display: 'flex', marginRight: 100}}>
                <Box
                  className={classes.logoText}
                  style={{
                    marginLeft: 65,
                    flex: 1,
                    flexDirection: 'row',
                    textAlign: 'center',
                    marginRight: 10,
                    fontFamily: 'OpenSans-Bold, Open Sans'
                  }}
                >
                  <h4 className={classes.forgotPasswordTitle}>Create Account:</h4>
                </Box>
              </Box>
              <Box sx={{marginLeft: 80, alignItems: 'center', marginRight: 80}}>
                <Box sx={{py: 2}}>
                  <Link to='/companyCreation' style={{textDecoration: 'none'}}>
                    <Button className={classes.button} fullWidth size='large' type='submit' variant='contained'>
                      Company
                    </Button>
                  </Link>
                </Box>
                <Box sx={{py: 2}}>
                  <Link to='/createAplicantAccount' style={{textDecoration: 'none'}}>
                    <Button className={classes.button} fullWidth size='large' type='submit' variant='contained'>
                      Applicant
                    </Button>
                  </Link>
                </Box>
                Have an account already?{' '}
                <Link to='/login'>
                  <span>Log In</span>
                </Link>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateNewAccount
