Team.delete_all
Game.delete_all
Tournament.delete_all
User.delete_all


3.times do |i|
    puts i
    @user = User.create(
        email: "test#{i + 1}@email.com",
        password: "password",
        name: "Admin#{i + 1}"
    )
    i++

    4.times do

        @tournament = Tournament.create(
            tname: Faker::Esport.event,
            division: Faker::Esport.league,
            where: Faker::Address.city,
            when: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
            gender: Faker::Gender.binary_type
        )
            

        8.times do
            @game = Game.create(
                placements: 'TBA',
                gtime: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short)
            )

            2.times do
                @team = Team.create(
                    team_name: Faker::Team.name,
                    player_1: Faker::Name.name,
                    player_2: Faker::Name.name
                )
            end
        end
    end
end