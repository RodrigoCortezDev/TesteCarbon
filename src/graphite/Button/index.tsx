import React from 'react';
import { Button, ButtonDefaultProps, ButtonKindProps, FormLabel, FormLabelProps } from 'carbon-components-react';
import { UserAvatar20 } from '@carbon/icons-react';
import { ForwardRefProps } from 'carbon-components-react/typings/shared';

//==================================================
// Button Completo
//==================================================
interface IProps {
	texto: string;
	props?: ForwardRefProps<HTMLButtonElement, ButtonDefaultProps & ButtonKindProps>;
	labelProps?: FormLabelProps;
	reference: boolean;
	onChangeReference(ret: boolean): void;
}

export const GraphiteButton: React.FC<IProps> = ({ texto, props, labelProps, reference, onChangeReference }) => {
	function onPressCustom() {
		reference = !reference;
		onChangeReference(reference);
	}

	return (
		<Button onClick={onPressCustom} {...props}>
			<UserAvatar20 />
			<FormLabel style={{ paddingLeft: '10px' }} {...labelProps}>
				{texto}
			</FormLabel>
		</Button>
	);
};

//==================================================
// Button Simples
//==================================================
interface IPropsSimple {
	texto: string;
	onPressCustom?(): void;
}
export const GraphiteButtonSimple: React.FC<IPropsSimple> = ({ onPressCustom, texto }) => {
	return (
		<Button onClick={onPressCustom}>
			<UserAvatar20 />
			<FormLabel style={{ paddingLeft: '10px' }}>{texto}</FormLabel>
		</Button>
	);
};
