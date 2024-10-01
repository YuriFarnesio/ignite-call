import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { getWeekDays } from '@/utils/get-week-days'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Outubro <span>2024</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
            <td>
              <CalendarDay>4</CalendarDay>
            </td>
            <td>
              <CalendarDay>5</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>6</CalendarDay>
            </td>
            <td>
              <CalendarDay>7</CalendarDay>
            </td>
            <td>
              <CalendarDay>8</CalendarDay>
            </td>
            <td>
              <CalendarDay>9</CalendarDay>
            </td>
            <td>
              <CalendarDay>10</CalendarDay>
            </td>
            <td>
              <CalendarDay>11</CalendarDay>
            </td>
            <td>
              <CalendarDay>12</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>13</CalendarDay>
            </td>
            <td>
              <CalendarDay>14</CalendarDay>
            </td>
            <td>
              <CalendarDay>15</CalendarDay>
            </td>
            <td>
              <CalendarDay>16</CalendarDay>
            </td>
            <td>
              <CalendarDay>17</CalendarDay>
            </td>
            <td>
              <CalendarDay>18</CalendarDay>
            </td>
            <td>
              <CalendarDay>19</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>20</CalendarDay>
            </td>
            <td>
              <CalendarDay>21</CalendarDay>
            </td>
            <td>
              <CalendarDay>22</CalendarDay>
            </td>
            <td>
              <CalendarDay>23</CalendarDay>
            </td>
            <td>
              <CalendarDay>24</CalendarDay>
            </td>
            <td>
              <CalendarDay>25</CalendarDay>
            </td>
            <td>
              <CalendarDay>26</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>27</CalendarDay>
            </td>
            <td>
              <CalendarDay>28</CalendarDay>
            </td>
            <td>
              <CalendarDay>29</CalendarDay>
            </td>
            <td>
              <CalendarDay>30</CalendarDay>
            </td>
            <td>
              <CalendarDay>31</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
