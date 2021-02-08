import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import { Anchor, Grommet, Header, Heading, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import styled from 'styled-components';
import DateViewContainer from '../containers/date-view/DateViewContainer';

const MyStyledMain = styled(Main)`
  background-color: #555;
  overflowY: auto;
`;

const Home = ({ id, go, fetchedUser }) => {
	return(
		<Panel id={id} style={{overflowY: "auto"}}>
			<PanelHeader>NASA</PanelHeader>
			<MyStyledMain style={{overflowY: "auto"}}>
				<DateViewContainer/>
			</MyStyledMain>
		</Panel>
	);
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
