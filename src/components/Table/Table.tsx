import { FC } from 'react'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import * as S from './Table.styles'
import { TableProps } from './Table.types'

/**
 * Table component to display dynamic data in a structured format.
 */
const Table: FC<TableProps> = ({ headers, data }) => {
  return (
    <S.TableContainer>
      <table role="table" aria-label="Cryptocurrency Portfolio">
        <S.TableHeader>
          <tr role="row">
            {[...new Set(headers)]?.map(header => (
              <th scope="col" key={header.title}>
                {header.title}
              </th>
            ))}
          </tr>
        </S.TableHeader>
        <tbody>
          {data?.map(item => (
            <S.TableRow key={item.id} role="row">
              {[...new Set(headers)]?.map(header => (
                <S.TableCell
                  role="cell"
                  key={header.key}
                  color={
                    header?.colors?.length && item[header.key].startsWith('-')
                      ? header?.colors?.[0]
                      : header?.colors?.[1]
                  }>
                  <Stack direction="row" gap={1} alignItems="center">
                    {header?.icon && <Icon icon={item?.icon} fontSize={20} />}
                    <>
                      {header.appendText ?? ''}
                      {item[header.key]}
                    </>
                  </Stack>
                </S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </tbody>
      </table>
    </S.TableContainer>
  )
}

export default Table
