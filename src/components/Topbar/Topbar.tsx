import { Typography, Stack, Button, Popover, Box } from '@mui/material'
import { FC, useRef, useState } from 'react'
import { useAppSelector } from '@app/store/hooks'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Avatar from '../Avatar'
import { Container } from './Topbar.styles'
import { TopbarProps } from './Topbar.types'

const Topbar: FC<TopbarProps> = ({ pageTitle }) => {
  const { t } = useTranslation()
  const { name, initials } = useAppSelector(state => state.user)
  const [show, setShow] = useState(false)
  const accountRef = useRef<HTMLButtonElement>(null)

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
        <Typography variant="h4" fontWeight="bold">
          {pageTitle}
        </Typography>
        <Button
          ref={accountRef}
          aria-label="Account menu"
          variant="text"
          onClick={() => setShow(true)}
          sx={{ padding: 0, borderRadius: 30, minWidth: 'unset' }}>
          <Avatar initials={initials ?? 'AD'} variant="primary" size="s" />
        </Button>
        <Popover
          id="accountMenu"
          open={show}
          anchorEl={accountRef.current}
          onClose={() => setShow(false)}
          anchorOrigin={{ vertical: 44, horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Box sx={{ padding: 2 }}>
            <Stack direction="column">
              <Typography variant="h6">{t('user.logged-in-as')}</Typography>
              <Stack direction="column" gap={0}>
                <Typography variant="h6" fontWeight="bold">
                  {name ?? ''}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="outlined" size="large" disableElevation sx={{ mt: 2 }}>
              <Stack alignItems="center">
                <Icon icon="bx:log-out" />
                <span>{t('user.logout')}</span>
              </Stack>
            </Button>
          </Box>
        </Popover>
      </Stack>
    </Container>
  )
}

export default Topbar
