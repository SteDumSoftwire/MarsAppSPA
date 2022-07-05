import { Button, FormControl, Grid, ImageList, ImageListItem, InputLabel, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss'
import { Circles, Rings } from 'react-loader-spinner';

function RoverPage() {
    return(
        <div className='App'>
            <header>
                <SelectRover />
            </header>
        </div>
    )

}

function SelectRover() {
    const [warning, setWarning] = useState<Boolean>(false);
    const [error, setError] = useState('');
    
    const [cameras, setCameras] = useState<any[]>([]);
    const [rovers, setRovers] = useState<any[]>([]);
    const [photos, setPhotos] = useState<any[]>([]);

    const [selectedRover, setSelectedRover] = useState('');
    const [selectedCamera, setSelectedCamera] = useState('');
    const [loading, setLoading] = useState(false);

    const roverChange = (event: SelectChangeEvent) => {
        setSelectedRover(event.target.value);
        setSelectedCamera('');
    }
    
    const cameraChange = (event: SelectChangeEvent) => {
        setSelectedCamera(event.target.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await axios.get('http://localhost:8000/rovers/' + selectedRover.toLowerCase() + '/camera/' + selectedCamera + '?paginationStart=1&paginationEnd=1').then(
            (res) => {
                setPhotos(res.data);
                setWarning(false);
                setLoading(false);
            }
        ).catch(err => {
            console.log(err)
            setWarning(true);
            setError(err.code + ': ' + err.message);
        });
    }

    useEffect(
        () => {
            setLoading(true);
            axios.get('http://localhost:8000/rovers').then(
                (res) => {
                    setRovers(res.data.rovers);
                    setLoading(false);
                }
            ).catch(err => console.log(err))
        }, []
    )
    useEffect(
        () => {
            const fetchCameras = async () => {
                setLoading(true);
                await axios.get('http://localhost:8000/rovers/' + selectedRover.toLowerCase()).then(
                    (res) => {
                        setCameras(res.data.rover.cameras);
                        setLoading(false);
                    }
                ).catch(err => console.log(err));
            }
            
            fetchCameras();
        }, [selectedRover]
    )
    if (!rovers)
        return null;

    return(
        <Grid container spacing={2}>
            <Grid item xs = {12}>
                <FormControl>
                    <div className="Container">
                        {loading && 
                            <div className="ContainerItem">
                                <Rings height={120} width={120} color="#1976d2"/>
                            </div>
                        }
                        <Select value={selectedRover} onChange={roverChange} className="SelectField ContainerItem" fullWidth>
                            {rovers.map((rover) => {
                                return <MenuItem value={rover.name}>{rover.name}</MenuItem>
                            })}
                        </Select>
                        <Select value={selectedCamera} onChange={cameraChange} className="SelectField ContainerItem" fullWidth>
                            {cameras.map((camera) => {
                                return <MenuItem value={camera.name}>{camera.full_name}</MenuItem>
                            })}
                        </Select>
                        <Button variant='outlined' type='submit' fullWidth color="primary" onClick={handleSubmit} disabled={!selectedRover || !selectedCamera} className="ContainerItem SubmitButton">
                            Get Photos
                        </Button>
                        {warning && <p className='ContainerItem'>{error}</p>}
                    </div>
                </FormControl>
            </Grid>
            <Grid item xs = {8} sm= {10} sx={{margin: "auto"}}>
                <ImageList cols={5} rowHeight={400}>
                    {photos.map((item) => (
                        <ImageListItem key={item.img_src}>
                            <img
                                src={`${item.img_src}?w=400?h=400`}
                                srcSet={`${item.img_src}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
    )
}


export default RoverPage;