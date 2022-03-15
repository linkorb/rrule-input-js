const CONTAINER_CLASSNAMES = ['rrule-container'];

const containerClassname = CONTAINER_CLASSNAMES.find((classname) =>
  document.querySelector(`.${classname}`),
);

const container = document.querySelector(`.${containerClassname}`);

if (container) container.innerHTML = `
  <div class="rrule">
    <div class="rrule-freq">
      <select class="rrule-freq-select">
        <option value="RRULE-YEARLY">YEARLY</option>
        <option value="RRULE-MONTHLY">MONTHLY</option>
        <option value="RRULE-WEEKLY">WEEKLY</option>
        <option value="RRULE-DAILY">DAILY</option>
        <option value="RRULE-CUSTOM">CUSTOM</option>
      </select>
    </div>

    <div class="rrule-start">
      <label>
        Start date/time:
        <input class="rrule-date" type="datetime-local" />
      <label>
    </div>

    <div class="rrule-yearly">
      <select class="rrule-type">
        <option value="on">By Date in Month</option>
        <option value="onthe">By nth Day in Month</option>
      </select>

      <span class="rrule-yearly-on" data-selector="yearly-on">
        <select class="rrule-month">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select class="rrule-monthday"></select>
      </span>

      <span class="rrule-yearly-onthe"
        style="display:none" data-selector="yearly-onthe">
        <select class="rrule-nth">
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="-1">Last</option>
        </select>

        <select class="rrule-day">
          <option value="SU">Sunday</option>
          <option value="MO">Monday</option>
          <option value="TU">Tuesday</option>
          <option value="WE">Wednesday</option>
          <option value="TH">Thursday</option>
          <option value="FR">Friday</option>
          <option value="SA">Saturday</option>
        </select>

        <span> of </span>

        <select class="rrule-month">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </span>
    </div>

    <div class="rrule-monthly" style="display:none">
      <p>
        Every <input type="number" class="rrule-interval" value="1" />
        month(s)
      </p>

      <select class="rrule-type">
        <option value="on">By Date in Month</option>
        <option value="onthe">By nth Day in Month</option>
      </select>

      <span class="rrule-monthly-on" data-selector="monthly-on">
        <select class="rrule-monthday">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </span>

      <span class="rrule-monthly-onthe" style="display:none" data-selector="monthly-onthe">
        <select class="rrule-nth">
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="-1">Last</option>
        </select>

        <select class="rrule-day">
          <option value="SU">Sunday</option>
          <option value="MO">Monday</option>
          <option value="TU">Tuesday</option>
          <option value="WE">Wednesday</option>
          <option value="TH">Thursday</option>
          <option value="FR">Friday</option>
          <option value="SA">Saturday</option>
        </select>
      </span>
    </div>

    <div class="rrule-weekly" data-selector="weekly" style="display:none">
      <p>
        Every <input type="number" class="rrule-interval" value="1" />
        week(s)
      </p>

      <div class="rrule-days">
        <p>
          <label>Sunday</label> <input type="checkbox" value="SU" />
        </p>
        <p>
          <label>Monday</label> <input type="checkbox" value="MO" />
        </p>
        <p>
          <label>Tuesday</label> <input type="checkbox" value="TU" />
        </p>
        <p>
          <label>Wednesday</label> <input type="checkbox" value="WE" />
        </p>
        <p>
          <label>Thursday</label> <input type="checkbox" value="TH" />
        </p>
        <p>
          <label>Friday</label> <input type="checkbox" value="FR" />
        </p>
        <p>
          <label>Saturday</label> <input type="checkbox" value="SA" />
        </p>
      </div>
    </div>

    <div class="rrule-daily" data-selector="daily" style="display:none">
      <p>
        Every <input type="number" class="rrule-interval" value="1" />
        day(s)
      </p>
    </div>

    <div class="rrule-custom" data-selector="custom" style="display: none">
      <label>Enter a rule:</label>
    </div>

    <div class="rrule-end">
      <select class="rrule-end-options">
        <option value="never">Never Ends</option>
        <option value="count">Ends After</option>
        <option value="until">Ends on Date</option>
      </select>

      <span class="rrule-count" style="display: none">
        <input type="number" class="rrule-interval" value="1" />
        instance(s)
      </span>

      <span class="rrule-until" style="display: none">
        <input type="date" class="rrule-date" />
      </span>
    </div>
  </div>

  <input
    id="rrule-result"
    type="text"
    disabled
    name="rrule-result"
    style="text-transform: uppercase; width: 100%"
   >
  </div>
`;

const date = new Date();
const month = date.getMonth();
const nth = ['1', '2', '3', '4', 'Last'];

const rrule = {
  asString: 'RRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
  nth,
  date,
  nthDay: nth[Math.floor(date.getDate() / 7)],
  year: date.getFullYear(),
  month,
  humanMonth: month + 1,
  monthday: date.getDate(),
  day: date.getDay(),
  days: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
  monthdays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  updateRrule: (ruleType) => {
    let end = '';

    if (
      window.getComputedStyle(document.querySelector('.rrule-end .rrule-count'))
        .display !== 'none'
    ) {
      let interval = Math.round(
        document.querySelector('.rrule-end .rrule-interval').value,
      );

      if (!Number.isInteger(interval) || interval < 1) interval = 1;

      end = ';COUNT=' + interval;
    }

    document.querySelector('.rrule .rrule-end-options').style.display =
      'inline';
    document.querySelector('#rrule-result').style.display = 'block';
    document.getElementById('rrule-result').disabled = true;

    if (
      window.getComputedStyle(document.querySelector('.rrule-end .rrule-until'))
        .display !== 'none'
    ) {
      const dateInput = document.querySelector('.rrule-end .rrule-date');

      if (dateInput.value) {
        const date = new Date(dateInput.value);

        end = dateEnd(date);
      } else {
        const date = new Date();
        date.setDate(date.getDate() + 1);

        dateInput.value = date.toISOString().split('T')[0];

        end = dateEnd(date);
      }
    } else {
      const dateInput = document.querySelector('.rrule-end .rrule-date');

      dateInput.value = null;
    }

    const prefix =
      document.getElementById('rrule-result').value.split('RRULE')[0] || '';

    switch (ruleType) {
      case 'yearly-on': {
        const month = document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-on .rrule-month',
        ).value;
        const monthday = document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-on .rrule-monthday',
        ).value;

        rrule.asString =
          prefix +
          'RRULE:FREQ=YEARLY;BYMONTH=' +
          month +
          ';BYMONTHDAY=' +
          monthday +
          end;

        break;
      }

      case 'yearly-onthe': {
        const month = document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-onthe .rrule-month',
        ).value;
        const day = document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-onthe .rrule-day',
        ).value;
        const nth = document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-onthe .rrule-nth',
        ).value;

        rrule.asString =
          prefix +
          'RRULE:FREQ=YEARLY;BYMONTH=' +
          month +
          ';BYDAY=' +
          day +
          ';BYSETPOS=' +
          nth +
          end;

        break;
      }

      case 'monthly-on': {
        const monthday = document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-on .rrule-monthday',
        ).value;
        const interval = Math.round(
          document.querySelector('.rrule .rrule-monthly .rrule-interval').value,
        );

        if (!Number.isInteger(interval) || interval < 1) interval = 1;

        rrule.asString =
          prefix +
          'RRULE:FREQ=MONTHLY;BYMONTHDAY=' +
          monthday +
          ';INTERVAL=' +
          interval +
          end;

        break;
      }

      case 'monthly-onthe': {
        const interval = Math.round(
          document.querySelector('.rrule .rrule-monthly .rrule-interval').value,
        );

        if (!Number.isInteger(interval) || interval < 1) interval = 1;

        const day = document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-onthe .rrule-day',
        ).value;
        const nth = document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-onthe .rrule-nth',
        ).value;

        rrule.asString =
          prefix +
          'RRULE:FREQ=MONTHLY;INTERVAL=' +
          interval +
          ';BYDAY=' +
          day +
          ';BYSETPOS=' +
          nth +
          end;

        break;
      }

      case 'weekly': {
        const interval = Math.round(
          document.querySelector('.rrule .rrule-weekly .rrule-interval').value,
        );

        if (!Number.isInteger(interval) || interval < 1) interval = 1;

        let days = '';

        Array.prototype.forEach.call(
          document.querySelectorAll(
            '.rrule .rrule-weekly input[type="checkbox"]:checked',
          ),
          (el, idx) => {
            if (el.checked) {
              if (idx > 0) days += ',';

              days += el.value;
            }
          },
        );

        if (days.length == 0) days = rrule.days[rrule.day];

        rrule.asString =
          prefix +
          'RRULE:FREQ=WEEKLY;INTERVAL=' +
          interval +
          ';BYDAY=' +
          days +
          end;

        break;
      }

      case 'daily': {
        const interval = Math.round(
          document.querySelector('.rrule .rrule-daily .rrule-interval').value,
        );

        if (!Number.isInteger(interval) || interval < 1) interval = 1;

        rrule.asString = prefix + 'RRULE:FREQ=DAILY;INTERVAL=' + interval + end;

        break;
      }

      case 'custom': {
        document.querySelector('.rrule .rrule-end-options').style.display =
          'none';
        document.querySelector('.rrule .rrule-start').style.display = 'none';

        document.getElementById('rrule-result').disabled = false;
        break;
      }

      default: {
        rrule.asString = '';

        break;
      }
    }

    document.getElementById('rrule-result').value = rrule.asString;

    function dateEnd(date) {
      let month = '' + (date.getMonth() + 1);
      let day = '' + date.getDate();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return ';COUNT=' + date.getFullYear() + month + day;

      end = ';COUNT=' + date.getFullYear() + month + day;
    }
  },
};

window.addEventListener('DOMContentLoaded', () => {
  const rruleForm = document.querySelector('.rrule');

  if (!rruleForm) return;

  document
    .querySelector('.rrule .rrule-freq-select')
    .addEventListener('change', (e) => {
      const selected = e.target.value.toLowerCase();

      document.querySelector('.rrule .rrule-start .rrule-date').value = null;

      document.getElementById('rrule-result').value = `RRULE${
        document.querySelector('#rrule-result').value.split('RRULE')[1]
      }`;
      document.querySelector('.rrule-end-options').value = 'never';

      document
        .querySelector('.rrule-end-options')
        .dispatchEvent(new Event('change'));

      Array.prototype.forEach.call(
        document.querySelector('.rrule').children,
        (el) => {
          if (
            el.classList.contains(selected) ||
            el.classList.contains('rrule-freq') ||
            el.classList.contains('rrule-start') ||
            el.classList.contains('rrule-end')
          )
            el.style.display = 'block';
          else el.style.display = 'none';

          if (el.classList.contains(selected))
            if (el.dataset.selector) {
              rrule.updateRrule(el.dataset.selector);
            } else {
              rrule.updateRrule(
                Array.prototype.find.call(
                  el.querySelectorAll('[data-selector]'),
                  (el) =>
                    ['block', 'inline'].includes(
                      window.getComputedStyle(el).display,
                    ),
                ).dataset.selector,
              );
            }
        },
      );
    });

  document
    .querySelector('.rrule .rrule-monthly .rrule-interval')
    .addEventListener('change', (e) => rrule.updateRrule(selectedType()));

  document
    .querySelector('.rrule .rrule-daily .rrule-interval')
    .addEventListener('change', (e) => rrule.updateRrule('daily'));

  document
    .querySelector('.rrule .rrule-monthly .rrule-type')
    .addEventListener('change', (e) => {
      if (e.target.value === 'on') {
        document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-on',
        ).style.display = 'inline';
        document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-onthe',
        ).style.display = 'none';

        rrule.updateRrule('monthly-on');
      } else {
        document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-on',
        ).style.display = 'none';
        document.querySelector(
          '.rrule .rrule-monthly .rrule-monthly-onthe',
        ).style.display = 'inline';

        rrule.updateRrule('monthly-onthe');
      }
    });

  document
    .querySelector('.rrule .rrule-yearly .rrule-type')
    .addEventListener('change', (e) => {
      if (e.target.value === 'on') {
        document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-on',
        ).style.display = 'inline';
        document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-onthe',
        ).style.display = 'none';

        rrule.updateRrule('yearly-on');
      } else {
        document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-on',
        ).style.display = 'none';
        document.querySelector(
          '.rrule .rrule-yearly .rrule-yearly-onthe',
        ).style.display = 'inline';

        rrule.updateRrule('yearly-onthe');
      }
    });

  document
    .querySelector('.rrule .rrule-yearly .rrule-yearly-on .rrule-monthday')
    .addEventListener('change', (e) => {
      rrule.updateRrule('yearly-on');
    });

  document
    .querySelector('.rrule .rrule-monthly .rrule-monthly-on .rrule-monthday')
    .addEventListener('change', (e) => {
      rrule.updateRrule('monthly-on');
    });

  document
    .querySelector('.rrule .rrule-yearly .rrule-yearly-on .rrule-month')
    .addEventListener('change', (e) => {
      rrule.updateRrule('yearly-on');

      const selectedMonth = e.target.value - 1;
      const days = rrule.monthdays[selectedMonth];

      const monthday = document.querySelector(
        '.rrule .rrule-yearly .rrule-yearly-on .rrule-monthday',
      );

      let html = '';

      for (let i = 1; i <= days; i++)
        html += "<option value='" + i + "'>" + i + '</option>';

      monthday.innerHTML = html;

      if (selectedMonth === month) {
        monthday.value = rrule.monthday;

        monthday.dispatchEvent(new Event('change'));
      } else {
        monthday.value = 1;

        monthday.dispatchEvent(new Event('change'));
      }
    });

  document.querySelector(
    '.rrule .rrule-yearly .rrule-yearly-on .rrule-month',
  ).value = rrule.humanMonth;

  document
    .querySelector('.rrule .rrule-yearly .rrule-yearly-on .rrule-month')
    .dispatchEvent(new Event('change'));

  document
    .querySelector('.rrule-end span input')
    .addEventListener('change', () => rrule.updateRrule(selectedType()));

  document
    .querySelector('.rrule-end span input')
    .addEventListener('input', () => rrule.updateRrule(selectedType()));

  document
    .querySelector('.rrule-end .rrule-end-options')
    .addEventListener('change', (e) => {
      document.querySelector('.rrule-end .rrule-until').style.display = 'none';
      document.querySelector('.rrule-end .rrule-count').style.display = 'none';

      switch (e.target.value) {
        case 'count': {
          document.querySelector('.rrule-end .rrule-count').style.display =
            'inline';

          break;
        }
        case 'until': {
          document.querySelector('.rrule-end .rrule-until').style.display =
            'inline';
          break;
        }
        default: {
          break;
        }
      }

      rrule.updateRrule(selectedType());
    });

  document
    .querySelector('.rrule-end .rrule-date')
    .addEventListener('change', () => rrule.updateRrule(selectedType()));

  document
    .querySelector('.rrule-start .rrule-date')
    .addEventListener('change', (e) => {
      const date = new Date(e.target.value);

      document.getElementById('rrule-result').value = `DTSTART:${date
        .toISOString()
        .split('.')[0]
        .replace(/[-:]/g, '')}ZRRULE${
        document.querySelector('#rrule-result').value.split('RRULE')[1]
      }`;
    });

  Array.prototype.forEach.call(
    document.querySelectorAll(
      '.rrule .rrule-yearly .rrule-yearly-onthe select',
    ),
    (el) => {
      el.addEventListener('change', (e) => rrule.updateRrule('yearly-onthe'));
    },
  );

  Array.prototype.forEach.call(
    document.querySelectorAll('.rrule .rrule-weekly input'),
    (el) => {
      el.addEventListener('change', (e) => rrule.updateRrule('weekly'));
    },
  );

  Array.prototype.forEach.call(
    document.querySelectorAll('.rrule .rrule-monthly-onthe select'),
    (el) =>
      el.addEventListener('change', () => rrule.updateRrule('monthly-onthe')),
  );

  function selectedType() {
    const el = document.querySelector(
      `.${document.querySelector('.rrule-freq-select').value.toLowerCase()}`,
    );

    if (['weekly', 'daily', 'custom'].includes(el.dataset.selector))
      return el.dataset.selector;

    return Array.prototype.find.call(
      el.querySelectorAll('[data-selector]'),
      (el) => ['block', 'inline'].includes(window.getComputedStyle(el).display),
    ).dataset.selector;
  }
});
