import ReactECharts from "echarts-for-react";
import { ThemeCtx } from "../../utils/ThemeCtx";
import { useContext } from "react";

export default function Chart({
    timeRange = [],
    categories = [],
    data = [],
    symbolSize = (dataItem) => dataItem[1] * 4,
    title = "Gráfico de Datos"
}) {
    const { theme } = useContext(ThemeCtx);
    const series = [];
    const singleAxis = [];
    const normalizedData = [];

    const categoryRanges = categories.map((category, idx) => {
        const categoryData = data.filter(item => item[0] === idx);
        const values = categoryData.map(item => item[2]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return { min, max };
    });

    data.forEach((dataItem) => {
        const categoryIndex = dataItem[0];
        const categoryRange = categoryRanges[categoryIndex];
        const normalizedValue = (dataItem[2] - categoryRange.min) / (categoryRange.max - categoryRange.min);
        if (!normalizedData[categoryIndex]) {
            normalizedData[categoryIndex] = [];
        }
        normalizedData[categoryIndex].push([dataItem[1], normalizedValue, dataItem[2]]);
    });

    categories.forEach((_category, idx) => {
        singleAxis.push({
            type: "category",
            boundaryGap: false,
            data: timeRange,
            top: `${(idx * 100) / categories.length + 5}%`,
            height: `${100 / categories.length - 10}%`,
            axisLabel: {
                interval: 2
            }
        });

        series.push({
            singleAxisIndex: idx,
            coordinateSystem: "singleAxis",
            type: "scatter",
            data: normalizedData[idx] || [],
            symbolSize: (dataItem) => dataItem[1] * 50
        });
    });

    const option = {
        tooltip: {
            position: "top",
            formatter: (params) => {
                const categoryIndex = params.data[0];
                const categoryName = categories[categoryIndex];
                const originalValue = params.data[2];
                return `${categoryName}: ${originalValue}`;
            }
        },
        title: {
            text: title,
            left: "center",
            textStyle: {
                color: theme === "dark" ? 'white' : 'black'
            }
        },
        singleAxis: singleAxis,
        series: series
    };

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
        </div>
    );
}
