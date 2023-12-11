import { Button, Center, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Chart = () => {
    const AnishRecord = [
        {
            months: 'January',
            doneWork : 10,
        }, {
            months: 'February',
            doneWork : 9,
        }, {
            months: 'March',
            doneWork :5,
        }, {
            months: 'April',
            doneWork : 6,
        }, {
            months: 'May',
            doneWork : 10,
        }, {
            months: 'june',
            doneWork : 9,
        }, {
            months: 'July',
            doneWork : 8,
        }, {
            months: 'August',
            doneWork : 7,
        }, {
            months: 'September',
            doneWork : 6,
        }, {
            months: 'October',
            doneWork : 8,
        }, 
        {
            months: 'November',
            doneWork : 7,
        }, {
            months: 'December',
            doneWork : 10,
        },
    ]
    return (
        <>
            <Center> <Button colorScheme='blue'>
                Anish's record this year
            </Button>  </Center>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={AnishRecord}  width={500} height={300}
                margin={{top : 5, right : 100, left : 20, Button: 5}} >
                    <CartesianGrid/>
                    <XAxis dataKey="months" interval={'preserveStartEnd'}/>
                    <YAxis/>
                    <Legend/>
                    <Line dataKey='doneWork'/>
                </LineChart>
            </ResponsiveContainer>

            <br /><br />
            <Center> <Button colorScheme='blue'>
                harsh's record this year
            </Button>  </Center>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={AnishRecord}  width={600} height={300}
                margin={{top : 5, right : 100, left : 20, Button: 5}} >
                    <CartesianGrid/>
                    <XAxis dataKey="months" interval={'preserveStartEnd'}/>
                    <YAxis/>
                    <Legend/>
                    <Line type={'monotone'} dataKey='doneWork' stroke='red'/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default Chart