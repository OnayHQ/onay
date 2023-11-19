/* eslint-disable @next/next/no-img-element */
import { addressShortner } from "@/utils";

export const TokenApprovalsTable = ({
  allowanceData,
}: {
  allowanceData: any;
}) => (
  <div className="w-full bg-white border shadow-xs rounded-2xl">
    <div className="w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&amp;_tr]:border-b [&amp;_tr]:border-surface-50">
          <tr className="border-b border-surface-50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-10 md:h-12">
            <th className="px-4 text-left align-middle font-semibold text-sm text-em-low text-muted-foreground">
              <div className="p-4 align-middle font-bold">Token</div>
            </th>
            <th className="px-4 font-bold text-right">Approved Amount</th>
            <th className="px-4 font-bold text-right">Spender</th>
          </tr>
        </thead>
        <tbody className="last-child:border-0">
          <tr className="border-b border-surface-50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle flex items-center font-medium w-max">
              <p className="text-xs">{allowanceData.token}</p>
            </td>
            <td className="p-4 align-middle text-right">
              <div className="flex items-center justify-end space-x-1 w-max lg:w-auto">
                <p className="font-semibold text-sm">
                  {allowanceData.allowance}
                </p>
              </div>
            </td>
            <td className="p-4 align-middle text-right">
              <p className="font-semibold text-xs text-em-low">
                {addressShortner(allowanceData.spender)}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
