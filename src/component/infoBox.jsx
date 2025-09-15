import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
export default function InfoBox({Info}) {
    const INIT_URL = "https://www.bing.com/th/id/OIP.kESNEeGhj6lLnim7NpaOMwHaE8?w=232&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"

    const HOT_URL = "data:image/webp;base64,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";
    const COLD_URL = "https://th.bing.com/th/id/OIP.a2K9W0R1Z6Fn2fbrhJoooQHaD4?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3";
    const RAINY_URL = "https://th.bing.com/th/id/OIP.1ajYbX579hWZ42EcHoj1GgHaFj?w=270&h=202&c=7&r=0&o=7&pid=1.7&rm=3";
   
    return (
        <>
            <div className="infoBox">
                <div className='card'>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity > 80 ? RAINY_URL : (Info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temprature = {Info.temp}&deg;C</div>
                            <div>Humidity = {Info.humidity}</div>
                            <div>Min Temp = {Info.tempMin}&deg;C</div>
                            <div>Max Temp = {Info.tempMax}&deg;C</div>
                            <div>The Weather can be described as <i>{Info.weather}</i> and Feels Like {Info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
                </div>
            </div>
        </>
    )
}