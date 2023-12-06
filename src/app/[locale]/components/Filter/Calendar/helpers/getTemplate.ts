import { ITitles } from '@/types';

const btnTemplate = (isDates: boolean, titleBtn: string | false) => `
	<button type="button"
		class="vanilla-calendar-info__btn ${isDates ? 'vanilla-calendar-info__btn_active' : '' }"
		data-custom-btn-calendar="close">${titleBtn}</button>
`;

const getTemplate = (isEndDate: boolean, isDates: boolean, titles: ITitles) => `
	<div class="vanilla-calendar-info">
		<b class="vanilla-calendar-info__title">${isEndDate ? titles.end : titles.start}</b>
		${titles.btn ? btnTemplate(isDates, titles.btn) : ''}
	</div>
	<div class="vanilla-calendar-datepicker">
		<div class="vanilla-calendar-controls">
			<#ArrowPrev />
			<#ArrowNext />
		</div>
		<div class="vanilla-calendar-grid">
			<#Multiple>
				<div class="vanilla-calendar-column">
					<div class="vanilla-calendar-header">
						<div class="vanilla-calendar-header__content">
							<#Month />
							<#Year />
						</div>
					</div>
					<div class="vanilla-calendar-wrapper">
						<#WeekNumbers />
						<div class="vanilla-calendar-content">
							<#Week />
							<#Days />
						</div>
					</div>
				</div>
			<#/Multiple>
		</div>
	</div>
`;

export default getTemplate;
