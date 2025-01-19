import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, DollarSign, Users } from 'lucide-react';
import * as Referral from '@/models/referral';

export default async function ReferralProgramDashboard() {
  const data = await Referral.getReferralStatistics();

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <h1>Referral Program Dashboard</h1>
      </CardHeader>
      <CardContent className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Rewards</CardTitle>
            <Award className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {data?.totalRewards.toFixed(2)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Average Spend</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              ${data?.averageSpend.toFixed(2)}
            </div>
          </CardContent>
        </Card>
        <Card className='md:col-span-2 lg:col-span-1'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Top Referrer</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='text-xs text-muted-foreground'>Address</div>
            <div className='truncate text-sm font-medium'>
              {data?.topReferrer?.address}
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <div className='text-xs text-muted-foreground'>Referrals</div>
                <div className='text-lg font-bold'>
                  {data?.topReferrer?.referralCount}
                </div>
              </div>
              <div>
                <div className='text-xs text-muted-foreground'>Volume</div>
                <div className='text-lg font-bold'>
                  ${data?.topReferrer?.volume.toFixed(2)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
