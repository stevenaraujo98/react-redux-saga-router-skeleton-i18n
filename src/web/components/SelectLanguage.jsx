import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import { InputBase, Select } from '@material-ui/core';

const BootstrapInput = withStyles((theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

export default function SelectLanguage() {
    const { t, i18n } = useTranslation();
    const lang = localStorage.getItem('Lang');
    const [language, setLanguage] = React.useState(lang ? lang : 'es');

    const handleChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('Lang', event.target.value);
    };

    return (
        <div>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={language}
                onChange={handleChange}
                input={<BootstrapInput />}
            >
                <MenuItem value={'es'} name={t('spanish')}>{t('spanish')}</MenuItem>
                <MenuItem value={'en'} name={t('english')}>{t('english')}</MenuItem>
            </Select>
        </div>
    );
}
