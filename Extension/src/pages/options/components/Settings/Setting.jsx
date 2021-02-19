import React from 'react';

import { Checkbox } from './Checkbox';
import { Select } from '../../../common/components/ui/Select';
import { TextInput } from './TextInput';
import { Textarea } from './Textarea';

export const SETTINGS_TYPES = {
    CHECKBOX: 'checkbox',
    SELECT: 'select',
    INPUT: 'input',
    TEXTAREA: 'textarea',
};

export const Setting = (props) => {
    const { type } = props;

    switch (type) {
        case SETTINGS_TYPES.CHECKBOX: {
            const {
                id, handler, inverted, value, label,
            } = props;
            return (
                <Checkbox
                    id={id}
                    handler={handler}
                    inverted={inverted}
                    value={value}
                    label={label}
                />
            );
        }
        case SETTINGS_TYPES.SELECT: {
            const {
                id, handler, options, value,
            } = props;
            const changeHandler = (e) => {
                const { target: { value: data } } = e;
                handler({ id, data: parseInt(data, 10) });
            };
            return (
                <Select
                    id={id}
                    handler={changeHandler}
                    options={options}
                    value={value}
                />
            );
        }
        case SETTINGS_TYPES.INPUT: {
            const {
                id, value, handler, placeholder,
            } = props;
            return (
                <TextInput
                    id={id}
                    value={value}
                    handler={handler}
                    placeholder={placeholder}
                />
            );
        }
        case SETTINGS_TYPES.TEXTAREA: {
            const {
                id, value, handler, placeholder,
            } = props;
            return (
                <Textarea
                    id={id}
                    value={value}
                    handler={handler}
                    placeholder={placeholder}
                />
            );
        }
        default:
            throw new Error(`
                There is no right component for a type: "${type}".
                Available types: ${Object.values(SETTINGS_TYPES).join(', ')}
            `);
    }
};