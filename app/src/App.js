import React from "react";
import Display from './components/display.js';
import About from './components/about.js'
import { Tab, Box, Button, Dialog, DialogTitle,
         DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { createTheme, ThemeProvider } from '@mui/material/styles' 
import './App.css';

function App() {

    const [value, setValue] = React.useState('1');

    const [open, setOpen] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: { main: "#3a5a40", },
        },
        typography: {
            fontFamily: 'paperboard',
            fontSize: 18,
            h2: {
                fontSize: 25,
                fontWeight: 700,
            },
        },
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: { fontSize: 20 },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: { width: '12ch' },
                },
            },
            MuiDialogContentText: {
                styleOverrides: {
                    root: { fontWeight: 700 }
                }
            },
        },
    });

    const tabTheme = createTheme({
        palette: {
            primary: { main: "#dad7cd" }
        },
        typography: {
            fontFamily: 'paperboard',
        },
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: '#a3b18a',
                        fontSize: 18,
                        fontWeight: 700,
                    }
                }
            }
        }
    });

    const handleClose = (e) => {
        setOpen(false);
        if (e.target.value === "2") {
            setValue('2')
        } 
    };

    return (
        <div class="app">
            <ThemeProvider theme={theme}>
            <div class="popup">
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle variant="h2" sx={{color:'#344e41'}}> {"Want to see a tutorial?"} </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color: '#3a5a40'}}> 
                        The about page has a tutorial for all new users. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} value="1">No</Button>
                <Button onClick={handleClose} value="2" autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
            </div>
            <div class="header">
                <h1>StitchSim</h1>
            </div>
            <div class="screen">
                <Box sx={{ width: '100%' }}>
                <TabContext value={value}>
                    <Box>
                    <div class="navbarlabels">
                    <ThemeProvider theme={tabTheme}>
                    <TabList onChange={handleChange} centered>
                        <Tab label="Main" value="1"/>
                        <Tab label="About" value="2"/>
                    </TabList>
                    </ThemeProvider>
                    </div>
                    </Box>
                    <TabPanel value="1" class="mainpage">
                        <Display />
                    </TabPanel>
                    <TabPanel value="2" class="aboutpage">
                        <About />
                    </TabPanel>
                </TabContext>
                </Box>

            </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
