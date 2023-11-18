import { addressShortner } from "@/utils";

export const TokenApprovalsTable = () => (
  <div className="w-full bg-white border shadow-xs rounded-2xl">
    <div className="w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&amp;_tr]:border-b [&amp;_tr]:border-surface-50">
          <tr className="border-b border-surface-50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-10 md:h-12">
            <th className="px-4 text-left align-middle font-semibold text-sm text-em-low text-muted-foreground">
              <div className="p-4 align-middle flex items-center font-medium w-max">
                <div className="flex items-end">
                  <img
                    src="https://stackly.eth.limo/assets/images/tokens/weth.png"
                    alt="Wrapped Ether"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className="flex items-center justify-center rounded-full bg-surface-50 w-10 h-10 text-[7px]"
                  />
                </div>
                <div className="ml-3 space-y-0.5">
                  <p className="font-bold text-sm">0.00</p>
                  <p className="font-semibold text-xs text-em-low">WETH</p>
                </div>
              </div>
            </th>
            <th className="px-4 font-bold text-right">Approved Amount</th>
            <th className="px-4 font-bold text-right">At risk</th>
            <th className="px-4 font-bold text-right">Last update</th>
          </tr>
        </thead>
        <tbody className="last-child:border-0">
          <tr className="border-b border-surface-50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle flex items-center font-medium w-max">
              <div className="ml-3 space-y-0.5">
                <p className="font-bold text-sm">1inch</p>
                <p className="font-semibold text-xs text-em-low">
                  {addressShortner(
                    "0x1F98431c8aD98523631AE4a59f267346ea31F984"
                  )}
                </p>
              </div>
            </td>
            <td className="p-4 align-middle text-right">
              <div className="flex items-center justify-end space-x-1 w-max lg:w-auto">
                <p className="font-semibold text-sm">Unlimited</p>
              </div>
            </td>
            <td className="p-4 align-middle text-right">
              <div className="flex items-center justify-end space-x-1 w-max lg:w-auto">
                <p className="font-semibold text-sm">$576</p>
              </div>
            </td>
            <td className="p-4 align-middle text-right">
              <p className="font-semibold text-sm text-em-low">
                12/11/2021 13:24:39
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
