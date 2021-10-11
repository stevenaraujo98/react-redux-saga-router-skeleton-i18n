import React from 'react';
import MaskedInput from 'react-text-mask';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { FilledInput, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },
}));

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export default function CellNumberInput({
    label = 'Número de celular',
    id = 'cellNumber',
    variant = 'standard',
    labelWidth = 150,
    required = false,
    // eslint-disable-next-line no-undef
    onChange = (key, value),
    name,
    ...props
}) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        textmask: '(  )    -    ',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <FormControl fullWidth className={classes.margin} variant={variant}>
            <InputLabel htmlFor="formatted-text-mask-input">
                {label} {required && '*'}
            </InputLabel>
            {variant === 'standard' ? (
                <Input
                    value={values.textmask}
                    onChange={(e) => {
                        onChange(name, e.target.value);
                        handleChange(e);
                    }}
                    name="textmask"
                    id={id}
                    inputComponent={TextMaskCustom}
                    fullWidth
                />
            ) : variant === 'outlined' ? (
                <OutlinedInput
                    value={values.textmask}
                    onChange={(e) => {
                        onChange(name, e.target.value);
                        handleChange(e);
                    }}
                    name="textmask"
                    id={id}
                    inputComponent={TextMaskCustom}
                    labelWidth={labelWidth}
                />
            ) : (
                <FilledInput
                    value={values.textmask}
                    onChange={(e) => {
                        onChange(name, e.target.value);
                        handleChange(e);
                    }}
                    name="textmask"
                    id={id}
                    inputComponent={TextMaskCustom}
                    fullWidth
                />
            )}
        </FormControl>
    );
}
