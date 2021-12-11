import "./app-info.css";

const AppInfo = (props) => {
    const {employeeCount, prizeCount} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeeCount}</h2>
            <h2>Премию получат: {prizeCount}</h2>
        </div>
    )
}

export default AppInfo;