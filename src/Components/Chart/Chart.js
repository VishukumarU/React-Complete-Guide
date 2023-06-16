import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const totalMaximum = Math.max(...props?.dataPoints.map(({ value }) => value));

    return (
        <div className='chart'>
            {props.dataPoints
                .map(dataPoint =>
                    <ChartBar
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                        key={dataPoint.label}
                    />
                )
            }
        </div>
    );
};

export default Chart;