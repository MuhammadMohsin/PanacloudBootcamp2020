var faunadb = require('faunadb'),
  q = faunadb.query;

(async()=>{
    var adminClient = new faunadb.Client({ secret: 'fnAD3k5_3EACB6gCBsRr3R3wpEKT_uo1PpVFackm' });

    try{
        const result = await adminClient.query(

            // q.CreateDatabase({ name: 'tempdb' })

            // q.CreateKey({
            //     database: q.Database('tempdb'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'messages' })

            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            //   })

            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: 'I am fine!'} },
            //   )


            // q.Map(
            //     [
            //       'This is message 1',
            //       'Message 2',
            //       'Reply for message 1 & 2',
            //     ],
            //     q.Lambda(
            //       'detail',
            //       q.Create(
            //         q.Collection('messages'),
            //         { data: { title: q.Var('detail') } },
            //       )
            //     ),
            //   )

            // q.Get(q.Ref(q.Collection('messages'), '278747403496982017'))

            // q.Get(q.Match(q.Index('detail_by_title'), "I am fine!"))

            // q.Update(
            //     q.Ref(q.Collection('messages'), '278747226935656965'),
            //     { data: { detail: "I am sick!" } },
            //   )

            // q.Replace(
            //     q.Ref(q.Collection('messages'), '278747226935656965'),
            //     { data: { detail: "I am Good Now!" } },
            //   )

            // q.Delete(
            //     q.Ref(q.Collection('messages'), '278747226935656965')
            //   )

          );
        console.log(result);
    } catch(err){
        console.log(err);
    }

})();