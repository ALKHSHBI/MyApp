import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'
import { PropTypes } from '@dhis2/prop-types'
import EditVisualizationButton from "./EditVisualizationButton";
import { DeleteButton } from './DeleteButton'

export const IndicatorsTable = ({ indicators }) => (
    <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead>Name</TableCellHead>
                <TableCellHead>Created on</TableCellHead>
                <TableCellHead>Type</TableCellHead>
                <TableCellHead>Likes</TableCellHead>
                <TableCellHead>Button</TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            {indicators.map(indicator => (
                <TableRow key={indicator.id}>
                    <TableCell>{indicator.text}</TableCell>
                    <TableCell>{indicator.created}</TableCell>
                    <TableCell>{indicator.type}</TableCell>
                    <TableCell>{indicator.likes}</TableCell>
                    <EditVisualizationButton  id={indicator.id}
                            name={indicator.text}   refetch={indicator.refetch} />
                    <DeleteButton id={indicator.id} refetch={indicator.refetch} />
                </TableRow>
            ))}
        </TableBody>
    </Table>
)

IndicatorsTable.propTypes = {
    indicators: PropTypes.array.isRequired,
}
