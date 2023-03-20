import {withRouter, RouteComponentProps, StaticContext} from 'react-router'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Box} from '@material-ui/core'
import {NavTab} from 'lib/molecule/navTab'
import {spacing, typography, hrmangoColors, shadows} from 'lib/hrmangoTheme'
import {CompanyFilters} from 'type/company/companyFilters'
import {LocationState} from 'type'
import {ChangeEvent, useState} from 'react'
import {JobApplicantTableActive} from '../../molecule/job/company/jobCompanyApplicantActive'
import {JobApplicantTableArchive} from '../../molecule/job/company/jobCompanyApplicantArchive'

export type JobsTableType = {
  loaded: boolean
  tableFilters?: CompanyFilters
}

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

type TabItemType = {
  tabId: string
  tabItem: string
}

const tabItems: TabItemType[] = [
  {
    tabId: '0',
    tabItem: 'Active'
  },
  {
    tabId: '1',
    tabItem: 'Archives'
  }
]

export const getFilteredNavTab = (candidateId): TabItemType[] =>
  tabItems
    .filter((item) => candidateId || item.tabId !== '-1')
    .map((item) => ({
      tabId: item.tabId,
      tabItem: item.tabItem
    }))

const CompanyApplicants = withRouter(
  ({
    match,
    history,
    location
  }: JobsTableType & RouteComponentProps<{candidateId: string}, StaticContext, LocationState>) => {
    function TabPanel(props: TabPanelProps) {
      const {children, value, index, ...other} = props

      return (
        <div
          role='tabpanel'
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          {value === index && <Box p={3}>{children}</Box>}
        </div>
      )
    }
    const useStyles = makeStyles((theme: Theme) => ({
      principalContain: {
        backgroundColor: hrmangoColors.white,
        boxShadow: shadows[20],
        borderRadius: '16px',
        margin: `${spacing[16]}px ${spacing[32]}px`,
        fontWeight: typography.fontWeightMedium
      },
      container: {
        position: 'relative',
        padding: spacing[16]
      },
      root: {
        flexGrow: 1,
        display: 'flex',
        marginTop: spacing[32],
        marginLeft: spacing[12]
      },
      tabPanel: {
        boxShadow: shadows[20],
        fontWeight: typography.fontWeightMedium,
        backgroundColor: hrmangoColors.white,
        borderTopRightRadius: '24px',
        borderBottomRightRadius: '24px',
        borderBottomLeftRadius: '24px',
        width: '-webkit-fill-available',
        marginRight: '32px',
        '& .MuiContainer-root': {
          padding: spacing[0]
        },
        padding: spacing[16]
      }
    }))
    const classes = useStyles()
    const [value, setValue] = useState(parseInt(location?.state?.params?.tab ?? 0))
    const candidateId = match.params.candidateId

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
      setValue(newValue)
    }

    return (
      <>
        <div className={classes.root}>
          <NavTab getFilteredNavTab={getFilteredNavTab} value={value} onChange={handleChange} id={candidateId} />
          <Box className={classes.tabPanel}>
            <TabPanel value={value} index={0}>
              {JobApplicantTableActive}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {JobApplicantTableArchive}
            </TabPanel>
          </Box>
        </div>
      </>
    )
  }
)

export {CompanyApplicants}
